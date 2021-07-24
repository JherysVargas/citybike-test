import { useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import { ENDPOINT } from '../../../constants';
import { IMapReducerMap } from '../../../reducers/map';
import { useDispatch, useSelector } from 'react-redux';
import { IMapReducerSearch } from '../../../reducers/search';
import { SearchInterface } from '../interfaces/searchInterface';
import { NetworkInterface } from '../interfaces/networkInterface';
import { setCities, setSelectCity } from '../../../reducers/search/actions';

export const useSearch = () => {
  const [
    { mapRef },
    { cities, selectCity }
  ]: [IMapReducerMap, IMapReducerSearch] = useSelector(({ map, search }: any) => [map, search]);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket: Socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.emit('getDataSearch');

    socket.on('updateDataSearch', (response: SearchInterface) => {
      if (response?.networks?.length > 0) {
        dispatch(setCities(response.networks))
      }
    });
    return () => {
      socket.disconnect();
    }
  }, [dispatch]);

  const handleSelectCity = (value: string) => {
    const city = JSON.parse(value) as NetworkInterface;
    dispatch(setSelectCity(city));
    const latitude = (city?.location?.latitude || 0.0)
    const longitude = (city?.location?.longitude || 0.0)
    mapRef?.flyToBounds([[latitude, longitude]], { maxZoom: 13, duration: 4 })
  };

  return {
    cities,
    selectCity,
    handleSelectCity
  }
}