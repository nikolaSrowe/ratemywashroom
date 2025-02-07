import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import tpaper from "./assets/tpaper.svg";
import "./campusMap.css";
import BuildingInfo from "./buildingInfo";
import buildings from "./buildings"; // Import buildings data

const mapIcon = L.icon({
  iconUrl: tpaper,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function CampusMap() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const bounds = [
    [49.93634193275319, -119.40369977943854], // Southwest coordinates (bottom-left corner)
    [49.94341188034255, -119.38998350924975], // Northeast coordinates (top-right corner)
  ];

  return (
    <div className={`campus-container ${selectedBuilding ? "sidebar-open" : ""}`}>
      {/* Sidebar for Building Info */}
      {selectedBuilding && (
        <BuildingInfo building={selectedBuilding} onClose={() => setSelectedBuilding(null)} />
      )}

      {/* Map Section */}
      <div className="map-container">
        <MapContainer
          center={[49.93952010585304, -119.39585710384094]}
          zoom={16}
          maxBounds={bounds}
          className="map"
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
      </div>
    </div>
  );
}

export default CampusMap;
