import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {

  constructor(private readonly seedService: SeedService) {}

  @Post(':cantidad')
  executeSeed(@Param('cantidad', ParseIntPipe) cantidad: number) {
    return this.seedService.executeSeed(cantidad);
  }

}
