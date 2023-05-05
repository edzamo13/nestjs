import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from 'src/module/users/users.service';
import { PayloadToken } from '../model/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    console.log('2.- AuthService');
    console.log('var', `email ${email} - password ${[password]}`);

    const user = await this.userService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...rta } = user.toJSON();
      return rta;
    } else {
      return null;
    }
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
