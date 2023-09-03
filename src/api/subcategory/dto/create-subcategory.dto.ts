import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  subcategoryName: string;

  @IsNumber()
  @IsNotEmpty()
  catalog_id: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;
}
