import React from "react";
import { Text } from "react-native";
//styles
import { HomeBackground } from "../../styles";
//stores
import tripStore from "../../stores/tripStore";

const ProfilePage = ({ route }) => {
    const { profile } = route.params;
    //I will find a way to:
    //fetch all trips and store them in an array
    //I need to filter trips based on userId
    const tripsOfOwner = tripStore.trips.filter(
        (trip) => trip.userId === profile.userId
    ).map(
        (trip) => (<Text>{trip.title}</Text>)
    );
    return (
        <HomeBackground>
            <Text>Profile: </Text>
            <Text> id: {profile.id} </Text>
            <Text> bio: {profile.bio} </Text>
            <Text> trips: {tripsOfOwner} </Text>
        </HomeBackground>
    );
};
export default ProfilePage;