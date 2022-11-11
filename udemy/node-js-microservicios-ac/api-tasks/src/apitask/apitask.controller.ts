import { ApitaskService } from './apitask.service';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskDto } from './dto/TaskDto';
import { resolve } from 'path';
import { rejects } from 'assert';

@Controller('apitask/v1/task')
export class ApitaskController {
  constructor(private readonly apitaskService: ApitaskService) {}

  @Post()
  //@UsePipes(new ValidationPipe()) this forms is individual. add on to every method
  create(@Body() taskDto: TaskDto) {
    return this.apitaskService.create(taskDto);
  }

  @Post('exception')
  //@UsePipes(new ValidationPipe()) this forms is individual. add on to every method
  createWithExceltion(@Body() taskDto: TaskDto) {
    /**
     * Add exception individual
     *
     */
    // throw new HttpException('Error den Peticion', HttpStatus.BAD_REQUEST);
    //  throw new BadRequestException('Error on Peticion');
    return new Promise((resolve, rejects) => {
      setTimeout(() => rejects('Error on Peticion'), 200);
    });
  }

  @Get()
  finAll(): TaskDto[] {
    return this.apitaskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): TaskDto {
    return this.apitaskService.findById(id);
  }

  /**
   this method needs to be modificated 
  */
  @Post(':id')
  updateById(@Body() body: TaskDto, @Param('id') id: string): TaskDto {
    return this.apitaskService.updateById(id, body);
  }

  /**
   this method needs to be modificated 
  */
  @Delete(':id')
  deleteById(@Param('id') id: string): boolean {
    return this.apitaskService.deleteById(id);
  }
}
