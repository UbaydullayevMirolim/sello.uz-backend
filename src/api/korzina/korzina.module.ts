import { Module } from '@nestjs/common';
import { BasketService } from './korzina.service';
import { BasketController } from './korzina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infra/entities/user.entity';
import { Product } from 'src/infra/entities/product.entity';
import { Basket } from 'src/infra/entities/basket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Basket, User, Product])],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
