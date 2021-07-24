import { Map } from 'leaflet'
import { NetworkInterface } from '../../pages/map/interfaces/networkInterface'
import { StationInterface } from '../../pages/map/interfaces/stationInterface'
import {
  SET_MAP_REFT,
  SET_DATA_CITYBIKES,
  SET_SELECT_STATION,
  SET_DATA_DETAIL_HOVER,
} from './actions'

export interface IMapReducerMap {
  mapRef?: Map,
  data?: NetworkInterface,
  detailHover?: StationInterface,
  selectStation?: StationInterface
}

const initialState: IMapReducerMap = {
  data: undefined,
  mapRef: undefined,
  detailHover: undefined,
  selectStation: undefined
}

export const map = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_MAP_REFT:
      return {
        ...state,
        mapRef: payload.data
      }
    case SET_DATA_CITYBIKES:
      return {
        ...state,
        data: payload.data
      }
    case SET_DATA_DETAIL_HOVER:
      return {
        ...state,
        detailHover: payload.data
      }
    case SET_SELECT_STATION:
      return {
        ...state,
        selectStation: payload.data
      }
    default:
      return state
  }
}