// type example

export type Weather =
  | "sunny"
  | "rainy"
  | "cloudy"
  | "snowy"
  | "windy"
  | "foggy";

// interface example

export interface User {
  name: string;
  age: number;
  email: string;
  weather: Weather;
}
