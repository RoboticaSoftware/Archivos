import React from "react";
import Colombia_map from "./ColombiaMap";

import "./Map.scss";

export function Map() {
  const handleRegionClick = (regionName) => {
    alert(`Clicked on ${regionName}`);
  };
  return (
    <>
      <div className="container_map">
        <Colombia_map
          className="map_svg"
          onClick={(e) => {
            const regionId = e.target.closest("path").id;
            handleRegionClick(regionId);
          }}
        />
      </div>
    </>
  );
}
