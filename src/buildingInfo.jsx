import "./buildingInfo.css";

function BuildingInfo({ building, onClose }) {
    if (!building) return null; // Prevents rendering when no building is selected

    return (
        <div className="info-bar">
            <button className="close" onClick={onClose}>X</button>
            <h2>{building.name}</h2>
            <ul>
                {building.list.split(/[\n,]+/).map((item, index) => ( // Splitting by newlines or commas
                    <li key={index}>{item.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default BuildingInfo;
