import {
  Controller,
  Post,
  Body,
  Req,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { PayDto } from './dto/pay.dto';
import { Request } from 'express';


@Controller('koshelok')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createWalletDto: CreateWalletDto, @Req() req: Request) {
    return this.walletService.create(createWalletDto, req);
  }

  // @UseGuards(AuthGuard)
  @Post("payment")
  payment(@Body() paymentDto: PayDto, @Req() req: Request) {
    return this.walletService.pay(paymentDto, req);
  }

}
