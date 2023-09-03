import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateBasketDto } from './create-korzina.dto';

export class UpdateBasketDto extends PartialType(CreateBasketDto) {
  @IsNumber()
  @IsOptional()
  product_id: number;
}
