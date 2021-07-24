import { NetworkInterface } from "../../pages/map/interfaces/networkInterface"

export const SET_DATA_SEARCH = 'SET_DATA_SEARCH'
export const SET_SELECT_CITY = 'SET_SELECT_CITY'


export const setCities = (data: NetworkInterface[]) => {
  return {
    type: SET_DATA_SEARCH,
    payload: { data }
  }
}

export const setSelectCity = (data: NetworkInterface) => {
  return {
    type: SET_SELECT_CITY,
    payload: { data }
  }
}