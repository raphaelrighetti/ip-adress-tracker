import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, useMap } from 'react-leaflet';

const CenterMarker = ({ position }) => {
  const map = useMap();

  React.useEffect(() => {
    map.flyTo(position, 15, { animate: true, duration: 0.1 });
  }, [position]);

  return (
    <Marker position={position}>
      <Popup>You are here...</Popup>
    </Marker>
  );
};

export default CenterMarker;
