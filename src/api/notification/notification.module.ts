import { Module } from '@nestjs/common';
import { NatificationService } from './notification.service';
import { NatificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/infra/entities/notification.entity';
import { User } from 'src/infra/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User])],
  controllers: [NatificationController],
  providers: [NatificationService],
})
export class NatificationModule {}
