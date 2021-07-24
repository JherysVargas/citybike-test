import React, { useEffect, useState, useCallback } from 'react';
import { io, Socket } from "socket.io-client";
import { MapContainer, TileLayer } from "react-leaflet";
import { NetworkInterface } from './interfaces/networkInterface';
import { CityBikeInterface } from './interfaces/cityBikeInterface';
import MarkerComponent from './components/marker';

const ENDPOINT: string = "http://127.0.0.1:4001";
const INITALPOSITION: [number, number] = [25.8102247, -80.2101821];
const ZOOM: number = 13;

const App = () => {
  const [data, setData] = useState<NetworkInterface>({});

  useEffect(() => {
    const socket: Socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.emit('getData');

    socket.on('updateData', (response: CityBikeInterface) => {
      if (response) {
        setData(response.network);
      }
    });
    return () => {
      socket.disconnect();
    }
  }, []);

  const renderMarker = useCallback(
    () => {
      return data?.stations?.map((station) => (
        <MarkerComponent key={station.id} {...station} />
      ));
    },
    [data?.stations],
  );

  return (
    <MapContainer
      center={INITALPOSITION}
      zoom={ZOOM}
      style={{ flex: 1 }}
    >
      <TileLayer

        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderMarker()}
    </MapContainer>
  );
}

export default App;
