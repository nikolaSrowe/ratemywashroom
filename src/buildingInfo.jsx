import React, { useState } from "react";
import "./buildingInfo.css";

function BuildingInfo({ building, onClose }) {
    const [selectedFloor, setSelectedFloor] = useState(null);

    if (!building) return null; // Prevents rendering when no building is selected

    return (
        <div className="info-bar">
            <button className="close" onClick={onClose}>X</button>
            <h2>{building.name}</h2>

            {/* List Floors */}
            <h3>Floors</h3>
            <ul>
                {building.floors.map((floor) => (
                    <li key={floor.number}>
                        <button onClick={() => setSelectedFloor(floor)}>
                            Floor {floor.number}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Show Bathrooms when a floor is selected */}
            {selectedFloor && (
                <div>
                    <h3>Bathrooms on Floor {selectedFloor.number}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Type</th>
                                <th>Access</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedFloor.bathrooms.map((bathroom, index) => (
                                <tr key={index}>
                                    <td>{bathroom.room}</td>
                                    <td>{bathroom.type}</td>
                                    <td>{bathroom.access}</td>
                                    <td>{bathroom.note || "—"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BuildingInfo;
