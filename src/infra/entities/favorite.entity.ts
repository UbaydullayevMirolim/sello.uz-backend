import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity({ name: 'favourites' })
export class Favourite extends BaseEntity {
  @ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Product, (product) => product.favorites)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
