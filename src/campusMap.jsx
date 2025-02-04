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
        <Popup>Admin Building</Popup>
      </Marker>
      <Marker position={[49.93938954747356, -119.39697324232871]}>
        <Popup>Art Building</Popup>
      </Marker>
      <Marker position={[49.94004464267661, -119.39644143688483]}>
        <Popup>Science Building</Popup>
      </Marker>
      <Marker position={[49.94065946968649, -119.39646805090713]}>
        <Popup>Fipke</Popup>
      </Marker>
      <Marker position={[49.9403730011134, -119.39532630080429]}>
        <Popup>Commons</Popup>
      </Marker>
      <Marker position={[49.94000004968197, -119.39561220550306]}>
        <Popup>UBCO Library</Popup>
      </Marker>
      <Marker position={[49.93898988446691, -119.39463467231046]}>
        <Popup>EME Building</Popup>
      </Marker>
      <Marker position={[49.94015501017497, -119.39778734834991]}>
        <Popup>Arts & Science</Popup>
      </Marker>
      <Marker position={[49.938145973874384, -119.39752120406114]}>
        <Popup>UBCO Gymnasium</Popup>
      </Marker>
      <Marker position={[49.94120740497877, -119.39622491774145]}>
        <Popup>UNC Building</Popup>
      </Marker>
      <Marker position={[49.94171253547814, -119.39606659052077]}>
        <Popup>Nechako</Popup>
      </Marker>
      <Marker position={[49.939267315866665, -119.39841337977235]}>
        <Popup>Creative and Critical Studies</Popup>
      </Marker>
      
    </MapContainer>
  );
}

export default CampusMap;
//49.93952010585304, -119.39585710384094