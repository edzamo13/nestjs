import { IFlight } from '../common/interfaces/flight.interfaces';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlightDto } from './dto/flight.dto';
import { FLIGTH } from '../common/models/models';

import { Model } from 'mongoose';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGTH.name) private readonly model: Model<IFlight>,
  ) {}

  create(flightDto: FlightDto): Promise<IFlight> {
    const newFlight = new this.model(flightDto);
    return newFlight.save();
  }

  async findById(id: string): Promise<IFlight> {
    return await this.model.findById(id).populate('passengers');
  }
  async findAll(): Promise<IFlight[]> {
    return await this.model.find().populate('passengers');
  }

  async updateFlight(id: string, flightDto: FlightDto) {
    return await this.model.findByIdAndUpdate(id, flightDto, { new: true });
  }

  async deleteFlight(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }

  async addPassenger(flightId: string, passengerId: string): Promise<IFlight> {
    return await this.model
      .findByIdAndUpdate(
        flightId,
        {
          $addToSet: { passengers: passengerId },
        },
        { new: true },
      )
      .populate('passengers');
  }
}
