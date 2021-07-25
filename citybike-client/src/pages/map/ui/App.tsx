import PopupMap from './components/popup';
import MapComponent from './components/map';
import SearchComponent from './components/search';
import TimeLineComponent from './components/timeline'

const MapPage = () => {
  return (
    <>
      <div
        style={{
          width: 350,
          position: 'absolute',
          zIndex: 999999,
          left: 10,
          top: 10,
        }}
      >
        <SearchComponent />
        <TimeLineComponent />
      </div>
      <MapComponent />
      <PopupMap />
    </>
  );
}

export default MapPage;
