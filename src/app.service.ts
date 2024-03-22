/* eslint-disable prettier/prettier */

import { PrismaService } from './prisma.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(data: any, userIp: string, userAgent: string) {
    data.ip = userIp;
    data.userAgent = userAgent;
    return await this.prisma.user_installs.create({ data });
  }
}


