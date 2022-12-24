import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PagesModule } from './tasks/pages.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    AuthModule,
    PagesModule,
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
