import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get User' })
  getUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User by Id' })
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update User by Id' })
  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.userService.updateUser(id, userDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User by Id' })
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteByUserId(id);
  }
}
