import React from "react";
import { useState } from "react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
//components
import QBoxList from "../qbox/QBoxList";
import { ScrollView } from "react-native";
//icons
import { AntDesign } from "@expo/vector-icons";

//observer
import { observer } from "mobx-react";

//styled components
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailWrapper,
  TripDetailDetails,
  TripDetailsProfilePicture,
  TripItemUsername,
  TripDetailLocation,
} from "./styles";

//native-base
import { Spinner } from "native-base";

//button
import { Button, Alert } from "react-native";
import { Button as NativeButton } from "native-base";

// buttons
import UpdateButton from "../buttons/UpdateButton";

const TripDetails = ({ route }) => {
  const { trip } = route.params;

  if (tripStore.loading) return <Spinner />;

  const [favorite, updateFavorite] = useState(trip.favorite);

  const toggleFavorite = async () => {
    await tripStore.tripFavoriteUpdate(trip);
    updateFavorite(!favorite);
  };

  const deleteHandler = async () => {
    await tripStore.tripDelete(trip.id);
    navigation.replace("Explore");
  };

  const submitHandler = () => {
    Alert.alert("Are you sure you want to delete trip!", "", [
      { text: "OK", onPress: deleteHandler },
      { text: "cancel", onPress: () => console.log("cancel"), style: "cancel" },
    ]);
  };

  return (
    <>
      <ScrollView>
        <TripDetailWrapper>

          <TripDetailImage source={{ uri: trip.image }} />
          <TripDetailTitle>{trip.title}</TripDetailTitle>
          <TripItemUsername>by: {trip.user.username}</TripItemUsername>
          <TripDetailLocation> {trip.locationTitle}</TripDetailLocation>

          <TripDetailsProfilePicture
            className="details"
            source={{ uri: trip.profilePicture }}
          />

          {authStore.user.id === +trip.userId ? (
            <NativeButton
              style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
              onPress={() => toggleFavorite()}
            >
              {favorite ? (
                <AntDesign name="heart" size={24} color="#ED3293" />
              ) : (
                <AntDesign name="hearto" size={24} color="#ED3293" />
              )}
            </NativeButton>
          ) : (
            <>
              {favorite ? (
                <AntDesign name="heart" size={24} color="#ED3293" />
              ) : (
                []
              )}
            </>
          )}

          <TripDetailDetails>{trip.description}</TripDetailDetails>

          {authStore.user.id === +trip.userId ? (
            <UpdateButton oldTrip={trip} />
          ) : (
            <></>
          )}

          {authStore.user.id === trip.userId && (
            <Button onPress={submitHandler} title="delete" color="red"></Button>
          )}

          <QBoxList trip={trip} />

        </TripDetailWrapper>
      </ScrollView>
    </>
  );
};

export default observer(TripDetails);
