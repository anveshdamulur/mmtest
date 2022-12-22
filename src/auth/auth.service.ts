import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async findAllUser(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }
  async findById(id: string): Promise<User> {
    const findUser = await this.userRepository.findByPk(id);
    if (!findUser) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return findUser;
  }
  async signUp(createUserDto: CreateUserDto): Promise<void> {
    const { username, email, password } = createUserDto;

    //genSalt
    const salt = await bcrypt.genSalt();
    //generateHash
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user: Promise<User> = this.userRepository.create({
        username,
        email,
        password: hashedPassword,
      });
      await user;
    } catch (error) {
      if (error.errors[0].validatorKey === 'not_unique') {
        throw new ConflictException('Email already exits');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(
    createUserDto: CreateUserDto,
  ): Promise<{ jwtAccessToken: string }> {
    const { username, password } = createUserDto;
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const jwtAccessToken = await this.jwtService.sign(payload);
      return { jwtAccessToken };
    } else {
      throw new UnauthorizedException('Please check your password');
    }
  }

  async deleteUser(id: string): Promise<void> {
    const deleteUser = await this.userRepository.destroy({ where: { id } });
    if (deleteUser === 0) {
      throw new NotFoundException(`Use with id ${id} not found`);
    }
  }
}
