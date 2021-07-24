import { Map } from 'leaflet';
import { useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import { ENDPOINT } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { IMapReducerMap } from '../../../reducers/map';
import { IMapReducerSearch } from '../../../reducers/search';
import { StationInterface } from '../interfaces/stationInterface';
import { CityBikeInterface } from '../interfaces/cityBikeInterface';
import { setDataBikes, setDataDetailHover, setMapRef } from '../../../reducers/map/actions';

export const useMapPage = () => {
  const [
    { data, detailHover, selectStation },
    { selectCity }
  ] : [IMapReducerMap, IMapReducerSearch] = useSelector(({ map, search }: any) => [map, search]);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket: Socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.emit('getData', { idCity: selectCity?.id });

    socket.on('updateData', (response: CityBikeInterface) => {
      if (response) {
        dispatch(setDataBikes(response.network))
      }
    });
    return () => {
      socket.disconnect();
    }
  }, [dispatch, selectCity]);

  const handleHoverItem = (station?: StationInterface) => dispatch(setDataDetailHover(station));

  const handleSetMapRef = (map: Map) => dispatch(setMapRef(map))

  return {
    data,
    detailHover,
    selectStation,
    handleSetMapRef,
    handleHoverItem,
  }
}