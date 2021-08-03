import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import ProfileOwnerTripItem from "../profile/ProfileOwnerTripItem";

//styles
import { ListWrapper } from "../trips/styles";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

const ProfileOwnerTrips = ({ route }) => {
    const { profile } = route.params;

    if (tripStore.loading) return <Spinner />;

    const tripList = tripStore.trips.filter(
        (trip) => trip.userId === profile.userId
    ).map(
        (trip) => <ProfileOwnerTripItem trip={trip} key={trip.id} />
    );

    return (
        <ListWrapper style={{ marginBottom: 90 }}>
            <List>{tripList}</List>
        </ListWrapper>
    );
};

export default observer(ProfileOwnerTrips);
