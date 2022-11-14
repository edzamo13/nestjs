import { PassengerService } from './passenger.service';
import { PassengerDto } from './dto/passenger.dto';
import { Controller, Param } from '@nestjs/common';
import { PassengerMSG } from 'src/common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMSG.CREATE)
  create(@Payload() passengerDto: PassengerDto) {
    return this.passengerService.create(passengerDto);
  }

  @MessagePattern(PassengerMSG.FIND_ALL)
  findAll() {
    console.log('micro!...');

    return this.passengerService.findAll();
  }

  @MessagePattern(PassengerMSG.FIND_ONE)
  getPassengerById(@Payload() id: string) {
    return this.passengerService.findById(id);
  }

  @MessagePattern(PassengerMSG.UPDATE)
  updatePassengerById(@Payload() payload: any) {
    return this.passengerService.updatePassenger(
      payload.id,
      payload.passengerDto,
    );
  }

  @MessagePattern(PassengerMSG.DELETE)
  deletePassengerId(@Param() id: string) {
    return this.passengerService.delete(id);
  }
}
