/* eslint-disable prettier/prettier */
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserIpUserAgentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userIp = req.ip;
    const userAgent = req.get('user-agent');

    if (!userIp || !userAgent) {
      throw new HttpException(
        'Missing IP or User-Agent',
        HttpStatus.BAD_REQUEST,
      );
    }

    req['userIp'] = userIp;
    req['userAgent'] = userAgent;

    next();
  }
}
