import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import tpaper from './assets/tpaper.svg';
import "./campusMap.css";
import BuildingInfo from './buildingInfo'; // Ensure capitalization matches file name

const mapIcon = L.icon({
  iconUrl: tpaper,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const buildings = [
  { name: "Admin Building", list: "Floor 1, Floor 2", position: [49.939181796093365, -119.39584497325157] },
  { name: "Art Building", list: "Home to UBCO's creative and fine arts programs.", position: [49.93938954747356, -119.39697324232871] },
  { name: "Science Building", list: "Where science courses and research take place.", position: [49.94004464267661, -119.39644143688483] },
  { name: "Fipke", list: "A multipurpose academic building.", position: [49.94065946968649, -119.39646805090713] },
  { name: "Commons", list: "Student common areas, study spaces, and food services.", position: [49.9403730011134, -119.39532630080429] },
  { name: "UBCO Library", list: "The main library at UBCO with study spaces and resources.", position: [49.94000004968197, -119.39561220550306] },
  { name: "EME Building", list: "Engineering, management, and education facilities.", position: [49.93898988446691, -119.39463467231046] },
  { name: "Arts & Science", list: "A mixed-use academic building for arts and science programs.", position: [49.94015501017497, -119.39778734834991] },
  { name: "UBCO Gymnasium", list: "Sports and fitness facilities for students and staff.", position: [49.938145973874384, -119.39752120406114] },
  { name: "UNC Building", list: "The University Centre with services and food courts.", position: [49.94120740497877, -119.39622491774145] },
  { name: "Nechako", list: "Residence building for students.", position: [49.94171253547814, -119.39606659052077] },
  { name: "Creative and Critical Studies", list: "A hub for creative writing and cultural studies.", position: [49.939267315866665, -119.39841337977235] }
];

function CampusMap() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const bounds = [
    [49.93634193275319, -119.40369977943854],  // Southwest coordinates (bottom-left corner)
    [49.94341188034255, -119.38998350924975]   // Northeast coordinates (top-right corner)
  ];

  return (
    <div className="map-container">
      <MapContainer
        center={[49.93952010585304, -119.39585710384094]}
        zoom={16}
        maxBounds={bounds}
        style={{ height: '500px', width: '700px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {buildings.map((building, index) => (
          <Marker
            key={index}
            position={building.position}
            icon={mapIcon}
            eventHandlers={{
              click: () => setSelectedBuilding(building),
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Show Sidebar if a Building is Selected */}
      {selectedBuilding && <BuildingInfo building={selectedBuilding} onClose={() => setSelectedBuilding(null)} />}
    </div>
  );
}

export default CampusMap;
