import { FlightService } from './flight.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightDto } from './dto/flight.dto';
import { FlightMSG } from 'src/common/constants';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @MessagePattern(FlightMSG.CREATE)
  create(@Payload() flightDto: FlightDto) {
    return this.flightService.create(flightDto);
  }

  @MessagePattern(FlightMSG.FIND_ALL)
  getFlightAll() {
    return this.flightService.findAll();
  }

  @MessagePattern(FlightMSG.FIND_ONE)
  getFlightById(@Payload() id: string) {
    return this.flightService.findById(id);
  }

  @MessagePattern(FlightMSG.UPDATE)
  updateFlight(@Payload() payload) {
    return this.flightService.updateFlight(payload.id, payload.flightDto);
  }

  @MessagePattern(FlightMSG.DELETE)
  deleteFlight(@Payload() id: string) {
    return this.flightService.deleteFlight(id);
  }

  /*
  This a method async because us go to invoque to method async o service flight and passenger
  */
  @MessagePattern(FlightMSG.ADD_PASSENGER)
  addPassenger(@Payload() payload) {
    return this.flightService.addPassenger(
      payload.flightId,
      payload.passengerId,
    );
  }
}
