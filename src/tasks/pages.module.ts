import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';

@Module({
  imports: [AuthModule, SequelizeModule.forFeature([])],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
