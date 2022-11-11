import { PassengerService } from './passenger.service';
import { PassengerDto } from './dto/passenger.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('passengers')
@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  create(@Body() passengerDto: PassengerDto) {
    return this.passengerService.create(passengerDto);
  }

  @Get()
  getPassenger() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  getPassengerById(@Param('id') id: string) {
    return this.passengerService.findById(id);
  }

  @Put(':id')
  updatePassengerById(
    @Param('id') id: string,
    @Body() passengerDto: PassengerDto,
  ) {
    return this.passengerService.updatePassanger(id, passengerDto);
  }

  @Delete(':id')
  deletePassenguerId(@Param('id') id: string) {
    return this.passengerService.delete(id);
  }
}
