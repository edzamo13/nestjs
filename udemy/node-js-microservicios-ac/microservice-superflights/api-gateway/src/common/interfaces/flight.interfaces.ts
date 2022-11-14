import { IPassenger } from 'src/common/interfaces/passenger.interfaces';
import { IWeather } from './weather.interfaces';

export interface IFlight {
  _id?: string;
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
  weather: IWeather[];
}
