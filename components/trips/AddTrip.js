import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";

//stores
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

//nav
import { useNavigation } from "@react-navigation/native";

//components
import { Alert } from "react-native";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {
  AddTripTitle,
  AddTripLabels,
  AddTripButton,
  AddTripButtonText,
} from "./styles";

const AddTrip = () => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleAddTrip = async () => {
    await tripStore.tripAdd(trip, navigation);
    //remove this👇🏻
    // navigation.navigate("Explore");
    console.log(trip);
    //*****👆🏻
  };

  const navigation = useNavigation();
  console.log(authStore.user); //remove the log

  //what would happen if the session ends while I'm in this component?
  if (authStore.user) {
    // if this will be empty you should adjust your condition right?
    // navigation.navigate("AddTrip");
  } else {
    Alert.alert(
      "You must have an account",
      "You need to sign in to continue.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Sign in", onPress: () => navigation.navigate("Signin") },
      ],
      { cancelable: false }
    );
  }
  return (
    <SafeAreaView>
      <AddTripTitle> Add New Trip</AddTripTitle>
      <AddTripLabels>Trip Title</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(title) => setTrip({ ...trip, title })}
        placeholder="Trip Title"
        // keyboardType="numeric"
      />
      {/* remove the comment 👆🏻 */}
      <AddTripLabels>Trip Description</AddTripLabels>
      <TextInput
        style={styles2.input}
        onChangeText={(description) => setTrip({ ...trip, description })}
        multiline
        numberOfLines={8}
        placeholder="Trip description"
      />
      <AddTripLabels>Trip Image Address</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Trip Image Adress"
      />
      <AddTripButton onPress={handleAddTrip}>
        <AddTripButtonText>Add</AddTripButtonText>
      </AddTripButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
const styles2 = StyleSheet.create({
  input: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default observer(AddTrip);
