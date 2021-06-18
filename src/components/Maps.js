import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
      <div className="GoogleMaps">
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{ lat: 55.571923658785, lng: 42.05083570787608 }}
        >
          <Marker position={{ lat: 55.571923658785, lng: 42.05083570787608 }} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCwaVxat4p4IailIqtY6r_9boljTHFHPBY",
})(Maps);
