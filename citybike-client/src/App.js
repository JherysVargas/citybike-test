import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const ENDPOINT = "http://127.0.0.1:4001";

const App = () => {

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
