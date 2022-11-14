import { IPassenger } from 'src/common/interfaces/passenger.interfaces';

export interface IFlight extends Document {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
}
