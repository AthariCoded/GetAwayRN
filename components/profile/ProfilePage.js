import React from "react";
import { Text } from "react-native";
import { HomeBackground } from "../../styles";

const ProfilePage = ({ route }) => {
    const { profile } = route.params;
    //I will find a way to:
    //fetch all trips and store them in an array
    //I need to filter trips based on userId

    return (
        <HomeBackground>
            <Text>Profile: </Text>
            <Text> id: {profile.id} </Text>
            <Text> bio: {profile.bio} </Text>

        </HomeBackground>
    );
};
export default ProfilePage;