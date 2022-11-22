import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FlightMSG, PassengerMSG } from 'src/common/constants';
import { IFlight } from 'src/common/interfaces/flight.interfaces';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { FlightDto } from './dto/flight.dto';

@ApiTags('flights')
@UseGuards(JwtAuthGuard)
@Controller('/api/v2/flight')
export class FlightController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyFlight = this.clientProxy.clientProxyFlight();
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  create(@Body() body: FlightDto): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.CREATE, body);
  }

  @Get()
  getAll(): Observable<IFlight[]> {
    return this._clientProxyFlight.send(FlightMSG.FIND_ALL, '');
  }

  @Get(':id')
  getOne(@Param('id') id: string): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: FlightDto,
  ): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.UPDATE, { id, body });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFlight.send(FlightMSG.DELETE, id);
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const paasenger = await this._clientProxyPassenger.send(
      PassengerMSG.FIND_ONE,
      passengerId,
    );

    if (!paasenger) {
      throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);
    }

    return this._clientProxyPassenger.send(FlightMSG.ADD_PASSENGER, {
      flightId,
      passengerId,
    });
  }
}
