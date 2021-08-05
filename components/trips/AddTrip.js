import { observer } from "mobx-react";
import React from "react";
import { useState, useEffect } from "react";

//stores
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

//nav
import { useNavigation } from "@react-navigation/native";

//components
import { Alert } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import {
  AddTripTitle,
  AddTripLabels,
  AddTripButton,
  AddTripButtonText,
} from "./styles";
import GooglePlacesInput from "./GooglePlacesInput";

const AddTrip = () => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [location, setLocation] = useState({
    locationTitle: "",
    place_id: "",
  });

  const updateLocation = (loc) => {
    setLocation(loc);
  };

  const handleAddTrip = async () => {
    const fullTrip = { ...trip, ...location };
    await tripStore.tripAdd(fullTrip, navigation);
  };

  const navigation = useNavigation();
  if (!authStore.user) {
    Alert.alert(
      "You must have an account",
      "You need to sign in to continue.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => navigation.navigate("Explore"),
        },
        { text: "Sign in", onPress: () => navigation.navigate("Signin") },
      ],
      { cancelable: false }
    );
  }

  return (
    <>
      <AddTripTitle> Add New Trip</AddTripTitle>

      <AddTripLabels>Trip Title</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(title) => setTrip({ ...trip, title })}
        placeholder="Trip Title"
      />

      <AddTripLabels>Trip Description</AddTripLabels>
      <TextInput
        style={styles2.input}
        onChangeText={(description) => setTrip({ ...trip, description })}
        multiline
        numberOfLines={8}
        placeholder="Trip description"
      />
      <AddTripLabels>Location</AddTripLabels>
      <GooglePlacesInput updateLocation={updateLocation}></GooglePlacesInput>
      <AddTripLabels>Trip Image Address</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Trip Image Adress"
      />

      <AddTripButton onPress={handleAddTrip}>
        <AddTripButtonText>Add</AddTripButtonText>
      </AddTripButton>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    marginTop: 12,
    padding: 10,
  },
});
const styles2 = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "white",
    height: 130,
    marginTop: 12,
    padding: 10,
  },
});
export default observer(AddTrip);
