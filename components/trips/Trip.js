import React from "react";

//native-base
import { List, Text } from "native-base";

import {
  TripItemTitle,
  TripListItem,
  TripDetailImage,
  TripItemUsername,
  TripItemProfilePicture,
} from "./styles";
import { useState } from "react";
// import cartStore from "../../stores/cartStore";
import { Button } from "native-base";
import { marginTop } from "styled-system";

const Trip = ({ trip, navigation }) => {
  // const [quantity, setQuantity] = useState(1);

  // const handleAdd = () => {
  //   cartStore.addToCart({ TripId: Trip.id, quantity });
  // };

  return (
    <List.Item
    // onPress={() =>
    //   navigation.navigate("TripDetails", { Trip: Trip })
    // }
    >
      <TripListItem>
        <TripDetailImage source={{ uri: trip.image }} />
        <TripItemProfilePicture source={{ uri: trip.profilePicture }} />
        <TripItemTitle>{trip.title}</TripItemTitle>
        <TripItemUsername>by {trip.user}</TripItemUsername>
      </TripListItem>
    </List.Item>
  );
};

export default Trip;
