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

//stores
import profileStore from "../../stores/profileStore";

//icons
import { AntDesign } from "@expo/vector-icons";

const TripItem = ({ trip, navigation }) => {
  //fetch a profile object of trip owner
  const profileHandler = async () => {
    const profile = await profileStore.profileByUserId(trip.userId);
    navigation.navigate("ProfileOwnerTrips", { profile: profile });
  };

  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetails", { trip: trip })}
    >
      <TripListItem>
        <TripDetailImage source={{ uri: trip.image }} />
        <TripItemProfilePicture source={{ uri: trip.profilePicture }} />
        <TripItemTitle>
          {trip.title}
          {trip.favorite ? (
            <AntDesign name="heart" size={18} color="#ED3293" />
          ) : (
            []
          )}
        </TripItemTitle>
        <TripItemUsername onPress={profileHandler}>
          in {trip.locationTitle}
        </TripItemUsername>
        <TripItemUsername onPress={profileHandler}>
          by {trip.user.username}
        </TripItemUsername>
      </TripListItem>
    </List.Item>
  );
};

export default observer(TripItem);
