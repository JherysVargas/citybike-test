import PopupMap from './components/popup';
import MapComponent from './components/map';
import SearchComponent from './components/search';

const MapPage = () => {
  return (
    <>
      <SearchComponent />
      <MapComponent />
      <PopupMap />
    </>
  );
}

export default MapPage;
