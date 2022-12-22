import { Module } from '@nestjs/common';
import { UserController } from './auth.controller';
import { UserService } from './auth.service';
import { UsersRepository } from './user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'MyTopSecret',
      signOptions: {
        expiresIn: 24 * 3600,
      },
    }),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [UserService, ...UsersRepository, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class UserModule {}
