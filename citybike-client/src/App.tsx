import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Styles
import './App.css';

const ENDPOINT = "http://127.0.0.1:4001/";

const App = () => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09])
  const [zoom, setZoom] = useState<number>(13)

  useEffect(() => {
    const socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.emit('getData');

    socket.on('updateData', (data) => {
      console.log(data)
    });
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <MapContainer center={position} zoom={zoom} style={{ flex: 1 }}>
      <TileLayer

        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Popup for Marker</Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
