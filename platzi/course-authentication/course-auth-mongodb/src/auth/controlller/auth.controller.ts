import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { User } from 'src/database/entities/user.entity';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../model/roles.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /* @UseGuards(AuthGuard('local'))
  @Post()
  login(@Req() req: Request) {
    return req.user;
  }
  */


  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    console.log('-----{}',req.user);
    
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }
}
