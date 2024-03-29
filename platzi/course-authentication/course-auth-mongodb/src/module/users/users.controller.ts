import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Inject()
  private usersService: UsersService;

  @Get()
  @ApiOperation ({
    summary: 'List of users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('tasks')
  tasks() {
    return this.usersService.getTasks();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get(':id/orders')
  getOrders(@Param('id') id: string) {
    return this.usersService.getOrdersByUser(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
