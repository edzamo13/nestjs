import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUserName(username);
    console.log('user', user);

    const isValidPassword = await this.userService.checkPassword(
      pass,
      user.password,
    );
    if (user && isValidPassword) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async singUp(userDto: UserDto) {
    return this.userService.create(userDto);
  }

  async signIn(user: any) {
    const payload = {
      username: user._doc.username,
      sub: user._doc._id.toString(),
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
