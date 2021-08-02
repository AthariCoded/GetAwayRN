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

const TripItem = ({ trip, navigation }) => {

  const profileHandler = async () => {
    // await profileStore.fetchProfile(trip.userId);
    //{ userId: trip.userId }
    navigation.navigate("ProfilePage");
  };

  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetails", { trip: trip })}
    >
      <TripListItem>
        <TripDetailImage source={{ uri: trip.image }} />
        <TripItemProfilePicture source={{ uri: trip.profilePicture }} />
        <TripItemTitle>{trip.title}</TripItemTitle>
        <TripItemUsername onPress={profileHandler} >by {trip.user.username} </TripItemUsername>
      </TripListItem>
    </List.Item>
  );
};

export default observer(TripItem);
