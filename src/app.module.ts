import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import { Banner } from './infra/entities/banner.entity';
import { BaseEntity } from './infra/entities/base.entity';
import { Basket } from './infra/entities/basket.entity';
import { Brand } from './infra/entities/brand.entity';
import { Catalog } from './infra/entities/catalog.entity';
import { Category } from './infra/entities/category.entity';
import { Notification } from './infra/entities/notification.entity';
import { Order } from './infra/entities/order.entity';
import { Product } from './infra/entities/product.entity';
import { Subcategory } from './infra/entities/subcategory.entity';
import { Subscribers } from './infra/entities/subscribers.entity';
import { User } from './infra/entities/user.entity';
import { Favourite } from './infra/entities/favorite.entity';
import { FileModule } from './api/file/file.module';
import { Admin } from './infra/entities/admin.entity';
import { CatalogModule } from './api/catalog/catalog.module';
import { CategoryModule } from './api/category/category.module';
import { SubcategoryModule } from './api/subcategory/subcategory.module';
import { BrandModule } from './api/brand/brand.module';
import { ProductModule } from './api/product/product.module';
import { BasketModule } from './api/korzina/korzina.module';
import { FavoriteModule } from './api/favourite/favourite.module';
import { NatificationModule } from './api/notification/notification.module';
import { BannerModule } from './api/banner/banner.module';
import { OrderModule } from './api/order/order.module';
import { WalletModule } from './api/payments/wallet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:mirolim@localhost:5432/sello',
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      entities: [
        BaseEntity,
        User,
        Basket,
        Product,
        Brand,
        Catalog,
        Category,
        Banner,
        Notification,
        Subscribers,
        Subcategory,
        Favourite,
        Order,
        Admin
      ],
    }),
    AuthModule,
    UserModule,
    FileModule,
    CatalogModule,
    CategoryModule,
    SubcategoryModule,
    BrandModule,
    ProductModule,
    BasketModule,
    FavoriteModule,
    NatificationModule,
    BannerModule,
    OrderModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
