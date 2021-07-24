import { ExtraInterface } from "./extraInterface";

export interface StationInterface {
  empty_slots?: number;
  extra?:       ExtraInterface;
  free_bikes?:  number;
  id?:          string;
  latitude:     number;
  longitude:    number;
  name:         string;
  timestamp?:   Date;
}
