import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Basket } from './basket.entity';
import { Favourite } from './favorite.entity';
import { Notification } from './notification.entity';
import { Order } from './order.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: null })
  birth_day: Date;

  @Column({ default: 0 })
  balance: number;

  @Column({ default: false })
  isVerify: boolean;

  @OneToMany(() => Basket, (basket) => basket.user)
  basket: Basket[];

  @OneToMany(() => Favourite, (favourite) => favourite.user)
  favorites: Favourite[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
}
