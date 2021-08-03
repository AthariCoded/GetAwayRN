import React from "react";

//native-base
import { List } from "native-base";

//styled components
import {
    TripItemTitle,
    TripListItem,
    TripDetailImage,
    TripItemProfilePicture,
} from "../trips/styles";

//observer
import { observer } from "mobx-react";

const ProfileOwnerTripItem = ({ trip }) => {
    return (
        <List.Item>
            <TripListItem>
                <TripDetailImage source={{ uri: trip.image }} />
                <TripItemProfilePicture source={{ uri: trip.profilePicture }} />
                <TripItemTitle>{trip.title}</TripItemTitle>
                {/* <TripItemUsername>by {trip.user}</TripItemUsername> */}
            </TripListItem>
        </List.Item>
    );
};

export default observer(ProfileOwnerTripItem);