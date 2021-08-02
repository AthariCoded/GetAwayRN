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
import { Button } from "react-native";

// buttons
import UpdateButton from "../buttons/UpdateButton";

const TripDetails = ({ route }) => {
  const { trip } = route.params;

  if (tripStore.loading) return <Spinner />;

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

        <Button
          onPress={() => tripStore.tripDelete(trip.id)}
          title="delete"
          color="gray"
        ></Button>
        {authStore.user.id === +trip.userId ? (
          <UpdateButton oldTrip={trip} />
        ) : (
          <></>
        )}
      </TripDetailWrapper>
    </>
  );
};

export default observer(TripDetails);
