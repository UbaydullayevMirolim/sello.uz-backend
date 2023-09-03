import { PartialType } from '@nestjs/swagger';
import {  IsOptional, IsString } from 'class-validator';
import { CreateNatificationDto } from './create-notification.dto';

export class UpdateNatificationDto extends PartialType(CreateNatificationDto) {
    @IsString()
    @IsOptional()
    message: string;
}
