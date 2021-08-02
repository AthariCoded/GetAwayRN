import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import Trip from "../trips/Trip";

//styles
import { ListWrapper } from "../trips/styles";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

const TripList = ({ trips }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = trips.map((trip) => <Trip trip={trip} key={trip.id} />);

  return (
    <ListWrapper style={{ marginBottom: 90 }}>
      <List>{tripList}</List>
    </ListWrapper>
  );
};

export default observer(TripList);
