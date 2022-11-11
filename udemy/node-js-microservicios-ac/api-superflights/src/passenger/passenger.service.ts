import { PASSENGER } from './../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interfaces';
import { PassengerDto } from './dto/passenger.dto';
import { Model } from 'mongoose';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) {}

  async create(passengerDto: PassengerDto): Promise<IPassenger> {
    const newPassenger = new this.model(passengerDto);
    return await newPassenger.save();
  }

  async findAll(): Promise<IPassenger[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<IPassenger> {
    return this.model.findById(id);
  }

  async updatePassanger(id: string, passengerDto: PassengerDto) {
    return await this.model.findByIdAndUpdate(id, passengerDto, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Deleted' };
  }
}
