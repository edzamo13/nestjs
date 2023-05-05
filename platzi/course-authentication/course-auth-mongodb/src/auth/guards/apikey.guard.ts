import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import databaseConfig from '../../config/database.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class ApikeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  @Inject(databaseConfig.KEY)
  private config: ConfigType<typeof databaseConfig>;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get('isPublic', context.getHandler());
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    const isAuth = authHeader === this.config.apiKey;
    if (!isAuth) {
      throw new UnauthorizedException(`You don't have permission `);
    }
    return isAuth;
  }
}
