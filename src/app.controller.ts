/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('save_user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() data: any, @Req() req: Request) {
    const userIp = req.ip;
    const userAgent = req.get('user-agent');
    const user = await this.appService.create(data);
    return { user, userAgent, userIp };
  }
}
