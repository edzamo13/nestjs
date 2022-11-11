import { FlightService } from './flight.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { PassengerService } from '../passenger/passenger.service';
import { HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('flights')
@ApiBearerAuth() // segurity
@UseGuards(JwtAuthGuard) //segurity
@Controller('api/v1/flight')
export class FlightController {
  constructor(
    private readonly flightService: FlightService,
    private readonly passengerService: PassengerService,
  ) {}

  @Post()
  create(@Body() flightDto: FlightDto) {
    return this.flightService.create(flightDto);
  }

  @Get()
  getFlightAll() {
    return this.flightService.findAll();
  }

  @Get(':id')
  getFlightById(@Param('id') id: string) {
    return this.flightService.findById(id);
  }

  @Put(':id')
  updateFlight(@Param('id') id: string, @Body() flightDto: FlightDto) {
    return this.flightService.updateFlight(id, flightDto);
  }

  @Delete(':id')
  deleteFlight(@Param('id') id: string) {
    return this.flightService.deleteFlight(id);
  }

  /*
  This a method async because us go to invoque to method async o service flight and passenger
  */
  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const passenguer = await this.passengerService.findById(passengerId);
    if (!passenguer) {
      throw new HttpException('Passenger Not Found ', HttpStatus.NOT_FOUND);
    }

    return this.flightService.addPassenger(flightId, passengerId);
  }
}
