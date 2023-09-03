import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { FavoriteService } from './favourite.service';
import { CreateFavoriteDto } from './dto/create-favourite.dto';
import { UpdateFavoriteDto } from './dto/update-favourite.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('favourite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto, @Req() req: Request) {
    return this.favoriteService.create(createFavoriteDto, req);
  }

  @Get()
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(+id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
    @Req() req: Request,
  ) {
    return this.favoriteService.update(+id, updateFavoriteDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
