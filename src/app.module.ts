import { Module } from '@nestjs/common';
import { UserModule } from './auth/auth.module';
@Module({
  imports: [UserModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
