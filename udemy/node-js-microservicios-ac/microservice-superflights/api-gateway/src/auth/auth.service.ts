import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserMSG } from 'src/common/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxySuperFlights,
    private readonly jwtService: JwtService,
  ) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._clientProxyUser
      .send(UserMSG.VALID_USER, {
        username,
        pass,
      })
      .toPromise();
    console.log('====================================');
    console.log(user);
    console.log('====================================');

    if (user) return user;

    return null;
  }

  async singUp(userDto: UserDto) {
    console.log('====================================');
    console.log(userDto);
    console.log('====================================');
    return await this._clientProxyUser
      .send(UserMSG.CREATE, userDto)
      .toPromise();
  }

  async signIn(user: any) {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    const payload = {
      username: user.username,
      sub: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
