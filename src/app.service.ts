/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    return data;
    // return await this.prisma.user_installs.create({ data });
  }
}
