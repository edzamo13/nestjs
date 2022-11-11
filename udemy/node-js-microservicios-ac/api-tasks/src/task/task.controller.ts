import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { query, Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  sendTask(@Req() req: Request) {
    return `sendTask ${req.method}`;
  }
  @Get('done')
  getTask(@Req() req: Request) {
    return `getTask ${req.method}`;
  }
  @Patch()
  partialTask(@Req() req: Request) {
    return `patch ${req.method}`;
  }

  @Delete()
  deleteTask(@Req() req: Request) {
    return `delete!..  ${req.method}`;
  }
  @Post('query')
  sendQueryParam(
    @Query('id') id: number,
    @Query('description') description: string,
    @Query('isdone') isdone: boolean,
  ) {
    return { id, description, isdone };
  }

  @Post('body')
  sendBody(@Body() body: any) {
    console.log('body', body);
    return { body };
  }

  @Post('bodydescription')
  sendBodyDescription(@Body('description') description: any) {
    console.log('body', description);
    return { description };
  }

  @Post('queryany')
  sendQueryParamAny(@Query() param: any) {
    return { param };
  }

  @Post(':id')
  sendTaskId(@Param('id') id: string, @Req() req: Request) {
    return `post with Id ${req.method} -  value of param ${id}`;
  }

  @Post(':id/description/:description/isdone/:isdone')
  sendTaskIdParam(@Param() query: any) {
    return { query };
  }
}
