import { Module } from '@nestjs/common';
import { FavoriteService } from './favourite.service';
import { FavoriteController } from './favourite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favourite } from 'src/infra/entities/favorite.entity';
import { User } from 'src/infra/entities/user.entity';
import { Product } from 'src/infra/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favourite, User, Product])],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule {}
