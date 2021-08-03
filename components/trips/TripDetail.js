import React from "react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";



//observer
import { observer } from "mobx-react";
import UpdateTrip from "./UpdateTrip";
//styled components
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailWrapper,
  TripDetailDetails,
  TripDetailsProfilePicture,
  TripItemUsername,
} from "./styles";

//native-base
import { Spinner } from "native-base";

//button
import { Button, Alert } from "react-native";

// buttons
import UpdateButton from "../buttons/UpdateButton";

const TripDetails = ({ route }) => {
  const { trip } = route.params;

  if (tripStore.loading) return <Spinner />;

  const deleteHandler = async () => {
    await tripStore.tripDelete(trip.id);
    navigation.replace("Explore");
  }

  const submitHandler = () => {
    Alert.alert("Are you sure you want to delete trip!", "", [
      { text: "OK", onPress: deleteHandler },
      { text: "cancel", onPress: () => console.log("cancel"), style: "cancel" }
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

        {authStore.user.id === +trip.userId ? (
          <UpdateButton oldTrip={trip} />
        ) : (
          <></>
        )}

        {(authStore.user.id === trip.userId) && (
          <Button
            onPress={submitHandler}
            title="delete"
            color="red"
          ></Button>
        )}

      </TripDetailWrapper>
    </>
  );
};

export default observer(TripDetails);
