import { NetworkInterface } from '../../pages/map/interfaces/networkInterface'
import {
  SET_DATA_SEARCH,
  SET_SELECT_CITY
} from './actions'

export interface IMapReducerSearch {
  cities?: NetworkInterface[],
  selectCity?: NetworkInterface
}

const initialState: IMapReducerSearch = {
  cities: [],
  selectCity: {
    id: 'decobike-miami-beach'
  }
}

export const search = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATA_SEARCH:
      return {
        ...state,
        cities: payload.data
      }
    case SET_SELECT_CITY:
      return {
        ...state,
        selectCity: payload.data
      }
    default:
      return state
  }
}