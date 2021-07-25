import { useCallback, memo } from 'react';
import MarkerComponent from './marker';
import { useMapPage } from '../../providers/useMapPage';
import { MapContainer, TileLayer } from "react-leaflet";

const INITALPOSITION: [number, number] = [25.8102247, -80.2101821];
const ZOOM: number = 13;

const MapComponent = () => {
  const {
    data,
    handleSetMapRef,
    handleHoverItem
  } = useMapPage();

  const renderMarker = useCallback(
    () => {
      return data?.stations?.map((station) => (
        <MarkerComponent
          key={station.id}
          station={station}
          handleOverItem={handleHoverItem}
        />
      ));
    },
    [data?.stations],
  );

  return (
    <MapContainer
      center={INITALPOSITION}
      zoom={ZOOM}
      style={{ flex: 1 }}
      whenCreated={handleSetMapRef}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderMarker()}
    </MapContainer>
  );
}

export default memo(MapComponent);
