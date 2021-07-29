import React from "react";

//native-base
import { List } from "native-base";

//styled components
import {
  TripItemTitle,
  TripListItem,
  TripDetailImage,
  TripItemUsername,
  TripItemProfilePicture,
} from "./styles";

//observer
import { observer } from "mobx-react";

const Trip = ({ trip, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetails", { trip: trip })}
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

export default observer(Trip);
