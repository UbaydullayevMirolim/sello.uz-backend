import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Banner } from './banner.entity';
import { BaseEntity } from './base.entity';
import { Brand } from './brand.entity';
import { Catalog } from './catalog.entity';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Entity({ name: 'subcategory' })
export class Subcategory extends BaseEntity {
  @Column({ nullable: false })
  subcategoryName: string;

  @ManyToOne(() => Catalog, (catalog) => catalog.subcategories)
  @JoinColumn({ name: 'catalog_id' })
  catalog: Catalog;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Product, (product) => product.subcategory)
  products: Product[];

  @OneToMany(() => Brand, (brand) => brand.subcategory)
  brands: Brand[];
}
