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

const TripDetails = ({ navigation, route }) => {
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
      </TripDetailWrapper>
    </>
  );
};

export default observer(TripDetails);
