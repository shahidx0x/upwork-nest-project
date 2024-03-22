/* eslint-disable prettier/prettier */

import { PrismaService } from './prisma.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const IPIFY_URL = 'https://api.ipify.org?format=json';
@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(data: any) {
    return data;
    // return await this.prisma.user_installs.create({ data });
  }
  getPublicIp(): Observable<string> {
    return this.httpService.get(IPIFY_URL).pipe(
      map((response) => response.data.ip),
      catchError((error) => of('Failed to retrieve public IP', error)),
    );
  }
}


