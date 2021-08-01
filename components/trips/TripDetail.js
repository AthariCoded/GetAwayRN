import React from "react";

//stores
import tripStore from "../../stores/tripStore";

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
} from "./styles";

//native-base
import { Spinner } from "native-base";

//button
import { Button } from "react-native";

const TripDetails = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading) return <Spinner />;

  const submitHandler = async () => {
    await tripStore.tripDelete(trip.id);
    navigation.replace("Explore");
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

        <Button
          onPress={submitHandler}
          title="delete"
          color="gray"
        ></Button>

      </TripDetailWrapper>
    </>
  );
};

export default observer(TripDetails);
