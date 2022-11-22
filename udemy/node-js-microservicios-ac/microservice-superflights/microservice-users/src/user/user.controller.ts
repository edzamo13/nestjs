import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @MessagePattern(UserMSG.CREATE)
  create(@Payload() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @MessagePattern(UserMSG.FIND_ALL)
  getUsers() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMSG.FIND_ONE)
  getUserById(@Payload() id: string) {
    return this.userService.findById(id);
  }

  @MessagePattern(UserMSG.UPDATE)
  updateUser(@Payload() payload: any) {
    return this.userService.updateUser(payload.id, payload.userDto);
  }

  @MessagePattern(UserMSG.DELETE)
  deleteUserById(@Payload() id: string) {
    return this.userService.deleteByUserId(id);
  }

  @MessagePattern(UserMSG.VALID_USER)
  async validateUser(@Payload() payload) {
    const user = await this.userService.findByUserName(payload.username);
    console.log('user', user);

    const isValidPassword = await this.userService.checkPassword(
      payload.pass,
      user.password,
    );
    if (user && isValidPassword) return user;
    return null;
  }
}
