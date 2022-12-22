import { Module } from '@nestjs/common';
import { UserController } from './auth.controller';
import { UserService } from './auth.service';
import { UsersRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtObj } from './jwt.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtObj.key,
      signOptions: {
        expiresIn: 24 * 3600,
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, ...UsersRepository, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class UserModule {}
