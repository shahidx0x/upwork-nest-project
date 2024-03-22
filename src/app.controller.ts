/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { RealIP } from 'nestjs-real-ip';

@Controller('save_user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() data: any, @Req() req: Request) {
    const userIp = this.appService.getPublicIp();
    const userAgent = req.get('user-agent');
    const user = await this.appService.create(data);
    return { user, userAgent, userIp };
  }

  @Get()
  get(@RealIP() ip: string): string {
    return ip;
  }
}
