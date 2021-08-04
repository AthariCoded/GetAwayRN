import React from "react";
import { observer } from "mobx-react";
import { useState, Spinner } from "react";

//nav
import { useNavigation } from "@react-navigation/native";

//components
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {
  ProfileTitle,
  ProfileLabels,
  SaveProfileButton,
  SaveProfileButtonText,
  ProfilePicture,
  ProfileTripsLabel,
  ProfileMapLabel,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
import ProfileTrips from "./ProfileTrips";
import { ScrollView } from "react-native";
import ProfileMap from "../map/ProfileMap";

//store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import tripStore from "../../stores/tripStore";

const ProfilePage = () => {
  if (profileStore.loading) return <Spinner />;
  const navigation = useNavigation();
  //states
  const [isEditing, updateIsEditing] = useState(false);
  const toggleEdit = () => {
    updateIsEditing(!isEditing);
  };

  const [profile, setProfile] = useState({
    bio: profileStore.profile.bio ?? "",
    image: profileStore.profile.image ?? "",
    id: authStore.user.profile.id,
  });

  const updateProfile = () => {
    if (profile.bio === "") setProfile({ ...profile, bio: null });
    if (profile.image === "") setProfile({ ...profile, image: null });
    profileStore.ProfileUpdate(profile);
    toggleEdit();
  };

  //get user's trips
  const userTrips = tripStore.trips.filter(
    (trip) => trip.userId === authStore.user.id
  );

  return (
    <SafeAreaView>
      <ProfileTitle>
        {authStore.user.username}
        <Button
          style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
          onPress={() => toggleEdit()}
        >
          <Ionicons name="settings-sharp" size={24} color="grey" />
        </Button>
      </ProfileTitle>
      <ScrollView>
        <ProfilePicture
          source={
            profileStore.profile.image
              ? { uri: profileStore.profile.image }
              : require("../../assets/images/defaultProfilePicture.png")
          }
        />

        {isEditing ? (
          <ProfileLabels>bio</ProfileLabels>
        ) : (
          <ProfileTripsLabel>
            {" "}
            Total Trips: {userTrips.length}
          </ProfileTripsLabel>
        )}
        <TextInput
          style={isEditing ? editStyles.input : styles.input}
          onChangeText={(bio) => setProfile({ ...profile, bio })}
          name="bio"
          multiline
          numberOfLines={8}
          placeholder="bio"
          editable={isEditing ? true : false}
          value={profile.bio}
        />
        {isEditing ? (
          <>
            <ProfileLabels>Profile Image Address</ProfileLabels>
            <TextInput
              style={styles2.input}
              name="image"
              value={profile.image}
              onChangeText={(image) => setProfile({ ...profile, image })}
              placeholder="Trip Image Adress"
            />

            <SaveProfileButton onPress={() => updateProfile()}>
              <SaveProfileButtonText>Save changes</SaveProfileButtonText>
            </SaveProfileButton>
          </>
        ) : (
          <>
            <ProfileMapLabel>
              See where {authStore.user.username} has been
            </ProfileMapLabel>
            <ProfileMap trips={userTrips}></ProfileMap>
          </>
        )}

        {!isEditing ? (
          <ProfileTrips
            trips={userTrips}
            navigation={navigation}
          ></ProfileTrips>
        ) : (
          []
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
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

const editStyles = StyleSheet.create({
  input: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});
export default observer(ProfilePage);
