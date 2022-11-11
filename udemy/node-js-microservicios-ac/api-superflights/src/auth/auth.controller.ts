import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDto } from '../user/dto/user.dto';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    console.log('req{}', req.user);
    return await this.authService.signIn(req.user);
  }

  @Post('singup')
  async signUp(@Body() userDto: UserDto) {
    console.log(userDto);
    return await this.authService.singUp(userDto);
  }

  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
