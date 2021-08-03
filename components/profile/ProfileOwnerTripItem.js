import React from "react";

//native-base
import { List } from "native-base";

//nav
import { useNavigation } from "@react-navigation/native";

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
    const navigation = useNavigation();
    return (
        <List.Item
            onPress={() => navigation.navigate("TripDetails", { trip: trip })}
        >
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