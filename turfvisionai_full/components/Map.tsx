
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-geometryutil';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([32.759, -97.797], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      edit: { featureGroup: drawnItems },
      draw: {
        polygon: true,
        rectangle: true,
        polyline: false,
        circle: false,
        marker: false
      },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (event) {
      const layer = event.layer;
      drawnItems.addLayer(layer);
      const area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
      const sqft = (area * 0.00107639).toFixed(2);
      alert('Estimated Area: ' + sqft + ' sq ft');
    });
  }, []);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default Map;
