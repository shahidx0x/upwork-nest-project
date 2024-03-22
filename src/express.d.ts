/* eslint-disable prettier/prettier */
// src/types/express.d.ts
declare global {
  namespace Express {
    interface Request {
      userIp?: string;
      userAgent?: string;
    }
  }
}
