import { StationInterface } from "./stationInterface";

export interface NetworkInterface {
  company?:  string[];
  href?:     string;
  id?:       string;
  location?: Location;
  name?:     string;
  stations?: StationInterface[];
}
