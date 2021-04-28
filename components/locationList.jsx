/* eslint-disable react/prop-types */
import React from "react";

import ListItem from "@components/location/listItem";

const LocationList = ({
  closePopups,
  locations,
  mapObject,
  toggleLocationList,
}) => {
  return (
    <div className="list" id="location-list">
      {locations.map((location, i) => (
        <ListItem
          key={`location-${location.name}-${i}`}
          closePopups={closePopups}
          index={i}
          location={location}
          mapObject={mapObject}
          toggleLocationList={toggleLocationList}
        />
      ))}
    </div>
  );
};

export default LocationList;