import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  brandName: string;

  @IsString()
  @IsNotEmpty()
  brandImage: string;

  @IsNumber()
  @IsNotEmpty()
  catalog_id: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsNumber()
  @IsNotEmpty()
  subcategory_id: number;
}
