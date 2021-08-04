import React from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const GooglePlacesInput = ({ updateLocation }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Location"
      fetchDetails
      onPress={(data, details = null) => {
        const locationTitle = data.description;
        updateLocation({
          locationLng: details.geometry.location.lng,
          locationLat: details.geometry.location.lat,
          locationTitle: locationTitle,
        });
      }}
      query={{
        key: "",
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
