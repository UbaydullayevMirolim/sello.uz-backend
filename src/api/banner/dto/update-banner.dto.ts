import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateBannerDto } from './create-banner.dto';

export class UpdateBannerDto extends PartialType(CreateBannerDto) {
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  catalogName: string;

  @IsString()
  @IsOptional()
  categoryName: string;

  @IsString()
  @IsOptional()
  subcategoryName: string;
}
