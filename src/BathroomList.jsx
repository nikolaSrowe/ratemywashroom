import React from "react";
import bathrooms from "./bathrooms";

const BathroomList = () => {
  return (
    <div>
      <h2>Accessible Washrooms</h2>
      <table>
        <thead>
          <tr>
            <th>Building</th>
            <th>Room</th>
            <th>Type</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {bathrooms.map((bathroom, index) => (
            <tr key={index}>
              <td>{bathroom.building}</td>
              <td>{bathroom.room}</td>
              <td>{bathroom.type}</td>
              <td>{bathroom.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BathroomList;
