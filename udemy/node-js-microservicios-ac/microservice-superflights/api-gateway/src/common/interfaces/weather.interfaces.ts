export interface IWeather {
  id: number;
  weather_state_name: WeatherStateName;
  weather_state_abbr: WeatherStateAbbr;
  wind_direction_compass: WindDirectionCompass;
  create: Date;
  applicable_date: Date;
  min_temp: number | null;
  max_temp: number | null;
  the_temp: number | null;
  wind_speed: number | null;
  wind_direction: number | null;
  air_pressure: number | null;
  humidity: number | null;
  visibility: number | null;
  predictability: number | null;
}

export enum WeatherStateName {
  C = 'c',
  Hc = 'hc',
  Lc = 'lc',
  Lr = 'lr',
  S = 's',
}

export enum WeatherStateAbbr {
  C = 'c',
  Hc = 'hc',
  Lc = 'lc',
  Lr = 'lr',
  S = 's',
}

export enum WindDirectionCompass {
  C = 'c',
  Hc = 'hc',
  Lc = 'lc',
  Lr = 'lr',
  S = 's',
}
