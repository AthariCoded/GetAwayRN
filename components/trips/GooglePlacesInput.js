import React from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const GooglePlacesInput = ({ updateLocation }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Location"
      onPress={(data, details = null) => {
        const place_id = data.place_id;
        const locationTitle = data.description;
        updateLocation({ place_id: place_id, locationTitle: locationTitle });
      }}
      query={{
        key: "AIzaSyB3K-IjZaFxVVBykp7ECaBQ38I6sd9IgpE",
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
