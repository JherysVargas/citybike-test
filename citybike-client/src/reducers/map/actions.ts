import { Map } from "leaflet"
import { NetworkInterface } from "../../pages/map/interfaces/networkInterface"
import { StationInterface } from "../../pages/map/interfaces/stationInterface"

export const SET_MAP_REFT = 'SET_MAP_REFT'
export const SET_DATA_CITYBIKES = 'SET_DATA_CITYBIKES'
export const SET_SELECT_STATION = 'SET_SELECT_STATION'
export const SET_DATA_DETAIL_HOVER = 'SET_DATA_DETAIL_HOVER'


export const setMapRef = (data: Map) => {
  return {
    type: SET_MAP_REFT,
    payload: { data }
  }
}

export const setDataBikes = (data: NetworkInterface) => {
  return {
    type: SET_DATA_CITYBIKES,
    payload: { data }
  }
}

export const setDataDetailHover = (data?: StationInterface) => {
  return {
    type: SET_DATA_DETAIL_HOVER,
    payload: { data }
  }
}

export const setSelectStation = (data: StationInterface) => {
  return {
    type: SET_SELECT_STATION,
    payload: { data }
  }
}