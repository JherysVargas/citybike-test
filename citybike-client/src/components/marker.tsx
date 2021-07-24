import { LeafletEventHandlerFnMap } from 'leaflet';
import { memo, useMemo } from 'react';
import { Popup, CircleMarker, useMap } from "react-leaflet";
import { StationInterface } from '../interfaces/stationInterface';

const MarkerComponent = ({
  name,
  latitude,
  longitude,
  free_bikes,
  empty_slots
}: StationInterface) => {
  const map = useMap()

  const outerHandlers = useMemo(
    (): LeafletEventHandlerFnMap => ({
      click() {
        map.fitBounds([[latitude, longitude]]);
      },
      mouseover(e) {
        e.target.openPopup();
      },
      mouseout(e) {
        e.target.closePopup();
      }
    }),
    [latitude, longitude, map],
  )

  const getColor = useMemo<string>(
    (): string => {
      if (free_bikes && empty_slots) {
        if (free_bikes > 5) {
          return 'green';
        }
        return 'orange';
      }
      return 'red';
    },
    [free_bikes, empty_slots],
  )

  return (
    <CircleMarker
      radius={6}
      eventHandlers={outerHandlers}
      center={[latitude, longitude]}
      pathOptions={{
        color: getColor,
        fillOpacity: 0.6,
        weight: 0
      }}
    >
      <Popup>
        <div>
          <h2
            style={{
              color: '#2c2c2c'
            }}
          >
            {name}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'grey',
              fontWeight: 'bold'
            }}
          >
            Available bikes: <span style={{ fontWeight: 'bold', color: 'green', fontSize: 16 }}>{free_bikes}</span>
          </p>
          <p
            style={{
              fontSize: 14,
              color: 'grey',
              fontWeight: 'bold'
            }}
          >
            Empty spaces: <span style={{ fontWeight: 'bold', color: 'green', fontSize: 16 }}>{empty_slots}</span>
          </p>
        </div>
      </Popup>
    </CircleMarker>
  )
}

export default memo(MarkerComponent);
