import React from "react";
import GoogleMapReact from "google-map-react";

const Map = props => {
  return (
    // Important! Always set the container height explicitly

    <div className="flex-grow">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={props.center}
        zoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
