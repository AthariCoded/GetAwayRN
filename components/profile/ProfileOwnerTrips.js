import React from "react";

//native-base
import { List, Spinner } from "native-base";

//react-native
import { ScrollView, SafeAreaView } from "react-native";

//components
import ProfileOwnerTripItem from "../profile/ProfileOwnerTripItem";

//styles
import { ListWrapper } from "../trips/styles";

import {
    ProfileTitle,
    ProfileLabels,
    ProfilePicture,
} from "./styles";

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

    const username = tripStore.trips.find(
        (trip) => trip.userId === profile.userId).user.username;

    return (
        <SafeAreaView>
            <ScrollView>
                <ProfileTitle>
                    {username}
                </ProfileTitle>
                <ProfilePicture
                    source={
                        profile.image
                            ? { uri: profile.image }
                            : require("../../assets/images/defaultProfilePicture.png")
                    }
                />
                <ProfileLabels>bio: {profile.bio}</ProfileLabels>
                <ProfileLabels style={{ marginBottom: 50 }}>
                    {" "}
                    Total Trips: {tripList.length}
                </ProfileLabels>

                <ListWrapper style={{ marginBottom: 90 }}>
                    <List>{tripList}</List>
                </ListWrapper>
            </ScrollView>
        </SafeAreaView>

    );
};

export default observer(ProfileOwnerTrips);
