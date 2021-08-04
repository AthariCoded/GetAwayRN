import React from "react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import wishStore from "../../stores/wishStore";
import profileStore from "../../stores/profileStore";
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
  WishButtonStyling,
} from "./styles";

//native-base
import { Spinner } from "native-base";

//button
import { Button, Alert, Text } from "react-native";

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
      <TripDetailWrapper>
        <TripDetailImage source={{ uri: trip.image }} />
        <TripDetailTitle>{trip.title}</TripDetailTitle>
        <TripDetailsProfilePicture
          className="details"
          source={{ uri: trip.profilePicture }}
        />
        {/* <TripItemUsername>{trip.user}</TripItemUsername> */}
        <TripDetailDetails>{trip.description}</TripDetailDetails>

        {trip.userId !== authStore.user.id &&
        !wishStore.wishes.some((area) => area.tripId === trip.id) ? (
          <WishButtonStyling onPress={handleAdd}>
            <Text>Want To Go!</Text>
          </WishButtonStyling>
        ) : (
          <></>
        )}

        {authStore.user.id === +trip.userId ? (
          <UpdateButton oldTrip={trip} />
        ) : (
          <></>
        )}

        {authStore.user.id === trip.userId && (
          <Button onPress={submitHandler} title="delete" color="red"></Button>
        )}
      </TripDetailWrapper>
    </>
  );
};

export default observer(TripDetails);
