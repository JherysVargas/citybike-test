import { memo, useMemo } from 'react';
import { LeafletEventHandlerFnMap } from 'leaflet';
import { CircleMarker, useMap } from "react-leaflet";
import { StationInterface } from '../../interfaces/stationInterface';

interface IPropsMarker {
  station: StationInterface,
  handleOverItem?: (station?: StationInterface) => void
  handleSelectItem?: (station?: StationInterface) => void
}

const MarkerComponent = ({
  station,
  handleOverItem,
  handleSelectItem
}: IPropsMarker) => {
  const map = useMap()
  const {
    latitude,
    longitude,
    free_bikes,
    empty_slots
  } = station

  const outerHandlers = useMemo(
    (): LeafletEventHandlerFnMap => ({
      click() {
        handleSelectItem?.call(this, station);
        handleOverItem?.call(this, station);
        map.fitBounds([[latitude, longitude]]);
      },
      mouseover() {
        handleOverItem?.call(this, station);
      },
      mouseout() {
        handleOverItem?.call(this, undefined);
      }
    }),
    [station],
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
    />
  )
}

export default memo(MarkerComponent);
