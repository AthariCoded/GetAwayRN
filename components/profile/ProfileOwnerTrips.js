import React from "react";

//nav
import { useNavigation } from "@react-navigation/native";

//native-base
import { List, Spinner } from "native-base";

//react-native
import { ScrollView, SafeAreaView, TextInput, StyleSheet } from "react-native";

//components
import TripItem from "../trips/TripItem";
import ProfileMap from "../map/ProfileMap";

//styles
import { ListWrapper } from "../trips/styles";
import {
  ProfileTitle,
  ProfileLabels,
  ProfilePicture,
  ProfileTripsLabel,
  ProfileMapLabel,
} from "./styles";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

const ProfileOwnerTrips = ({ route }) => {
  const { profile } = route.params;
  const navigation = useNavigation();
  if (tripStore.loading) return <Spinner />;

  const userTrips = tripStore.trips.filter(
    (trip) => trip.userId === profile.userId
  );

  const tripList = userTrips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  const username = tripStore.trips.find(
    (trip) => trip.userId === profile.userId
  ).user.username;

  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileTitle>{username}</ProfileTitle>
        <ProfilePicture
          source={
            profile.image
              ? { uri: profile.image }
              : require("../../assets/images/defaultProfilePicture.png")
          }
        />
        <ProfileTripsLabel> Total Trips: {tripList.length}</ProfileTripsLabel>
        <TextInput
          style={styles.input}
          name="bio"
          multiline
          numberOfLines={8}
          placeholder="bio"
          editable={false}
          value={profile.bio}
        />
        <>
          <ProfileMapLabel>See where {username} has been</ProfileMapLabel>
          <ProfileMap trips={userTrips}></ProfileMap>
        </>
        <ListWrapper style={{ marginBottom: 90 }}>
          <List>{tripList}</List>
        </ListWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "transparent",
    fontSize: 20,
  },
});
export default observer(ProfileOwnerTrips);
