import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CampusMap() {
    const bounds = [
        [49.93634193275319, -119.40369977943854],  // Southwest coordinates (bottom-left corner)
        [49.94341188034255, -119.38998350924975]   // Northeast coordinates (top-right corner)
      ];
  return (
    <MapContainer
      center={[49.93952010585304, -119.39585710384094]} // Replace with your campus coordinates
      zoom={16} // Adjust for initial zoom level
      maxBounds={bounds}
      style={{ height: '500px', width: '700px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.93952010585304, -119.39585710384094]}>
        <Popup>My School Campus</Popup>
      </Marker>
    </MapContainer>
  );
}

export default CampusMap;
//49.93952010585304, -119.39585710384094