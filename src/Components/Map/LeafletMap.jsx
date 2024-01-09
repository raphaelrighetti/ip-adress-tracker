import React from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './LeafletMap.module.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import CenterMarker from './CenterMarker';

const LeafletMap = ({ data }) => {
  const [position, setPosition] = React.useState([51.505, -0.09]);

  React.useEffect(() => {
    if (data) {
      setPosition([data.location.lat, data.location.lng]);
    }
  }, [data]);

  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        className={styles.map}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CenterMarker position={position} />
    </MapContainer>
  );
};

export default LeafletMap;
