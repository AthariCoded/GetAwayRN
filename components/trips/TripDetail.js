import React from "react";
import { useState } from "react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import wishStore from "../../stores/wishStore";
import profileStore from "../../stores/profileStore";

//components
import QBoxList from "../qbox/QBoxList";
import { ScrollView } from "react-native";

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
  TripDetailUsername,
  TripItemUsername,
  WishButtonStyling,
  TripDetailLocation,
} from "./styles";

//native-base
import { Spinner } from "native-base";

//button

import { Button, Alert, Text } from "react-native";


import { Button as NativeButton } from "native-base";


// buttons
import UpdateButton from "../buttons/UpdateButton";

const TripDetails = ({ route }) => {
  const { trip } = route.params;

  const handleAdd = () => {
    const newWish = { tripId: trip.id };
    wishStore.addToWish(newWish);
    Alert.alert(" You added to the wishlist");
  };
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
          <TripDetailUsername>by: {trip.user.username}</TripDetailUsername>
          <TripDetailLocation> {trip.locationTitle}</TripDetailLocation>
          <TripDetailDetails>{trip.description}</TripDetailDetails>
          <TripDetailsProfilePicture


          {/* <TripDetailsProfilePicture

            className="details"
            source={{ uri: trip.profilePicture }}
          /> */}

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

          {authStore.user.id === +trip.userId ? (
            <UpdateButton oldTrip={trip} />
          ) : (
            <></>
          )}
{trip.userId !== authStore.user.id &&
        !wishStore.wishes.some((area) => area.tripId === trip.id) ? (
          <WishButtonStyling onPress={handleAdd}>
            <Text>Want To Go!</Text>
          </WishButtonStyling>
        ) : (
          <></>
        )}
          {authStore.user.id === trip.userId && (
            <Button
              onPress={submitHandler}
              title="delete trip"
              color="red"
              style={{ fontSize: 18 }}
            ></Button>
          )}

          <QBoxList trip={trip} />
        </TripDetailWrapper>
      </ScrollView>

    </>
  );
};

export default observer(TripDetails);
