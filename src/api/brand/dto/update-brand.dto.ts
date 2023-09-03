import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @IsOptional()
  brandName: string;

  @IsString()
  @IsOptional()
  brandImage: string;

  @IsNumber()
  @IsOptional()
  catalog_id: number;

  @IsNumber()
  @IsOptional()
  category_id: number;

  @IsNumber()
  @IsOptional()
  subcategory_id: number;
}
