import { StationInterface } from "./stationInterface";
import { LocationInterface } from "./locationInterface";

export interface NetworkInterface {
  company?:  string[];
  href?:     string;
  id?:       string;
  location?: LocationInterface;
  name?:     string;
  stations?: StationInterface[];
}
