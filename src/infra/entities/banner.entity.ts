import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'banners' })
export class Banner extends BaseEntity {
  @Column({ nullable: false })
  image: string;

  @Column()
  catalogName: string;

  @Column()
  categoryName: string;

  @Column()
  subcategoryName: string;
}
