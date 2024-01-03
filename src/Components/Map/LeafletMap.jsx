import React from 'react';
import styles from './LeafletMap.module.css';

const LeafletMap = ({ data }) => {
  const [map, setMap] = React.useState(null);
  const [marker, setMarker] = React.useState(null);
  const [script, setScript] = React.useState(null);
  const [link, setLink] = React.useState(null);

  React.useEffect(() => {
    const scriptEl = document.createElement('script');
    const linkEl = document.createElement('link');

    scriptEl.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    scriptEl.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    scriptEl.crossOrigin = '';
    scriptEl.onload = handleLoad;

    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    linkEl.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    linkEl.crossOrigin = '';
    linkEl.onload = handleLoad;

    document.body.appendChild(scriptEl);
    document.head.appendChild(linkEl);

    return () => {
      document.body.removeChild(scriptEl);
      document.head.removeChild(linkEl);
    };
  }, []);

  React.useEffect(() => {
    if (script && link) {
      setMap(L.map(styles.map));
    }
  }, [script, link]);

  React.useEffect(() => {
    if (map) {
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    }
  }, [map]);

  React.useEffect(() => {
    if (data && map) {
      const { location } = data;

      map.setView([location.lat, location.lng], 13);
      setMarker(L.marker([location.lat, location.lng]));
    }
  }, [data, map]);

  React.useEffect(() => {
    if (marker) {
      map.removeLayer(marker);

      marker.addTo(map);
    }
  }, [marker, map]);

  function handleLoad({ target }) {
    switch (target.tagName) {
      case 'SCRIPT':
        setScript(target);
        break;
      case 'LINK':
        setLink(target);
        break;
    }
  }

  return <div id={styles.map} className={styles.map}></div>;
};

export default LeafletMap;
