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
import { observer } from "mobx-react";
const UpdateTrip = ({ route }) => {
  const { oldTrip } = route.params;
  const [trip, setTrip] = useState(oldTrip);

  const navigation = useNavigation();
  const handleUpdateTrip = async () => {
    await tripStore.tripUpdate(trip, navigation);
    navigation.navigate("Explore");
  };

  //   console.log("user", authStore.user); remove this line
  if (authStore.user) {
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
  //   console.log("trip", trip); this line also

  return (
    <SafeAreaView>
      <AddTripTitle> Update New Trip</AddTripTitle>
      <AddTripLabels>Trip Title</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(title) => setTrip({ ...trip, title })}
        placeholder="Trip Title"
        defaultValue={oldTrip.title}
      />
      <AddTripLabels>Trip Description</AddTripLabels>
      <TextInput
        style={styles2.input}
        onChangeText={(description) => setTrip({ ...trip, description })}
        multiline
        numberOfLines={8}
        placeholder="Trip description"
        defaultValue={oldTrip.description}
      />
      <AddTripLabels>Trip Image Adress</AddTripLabels>
      <TextInput
        style={styles.input}
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Trip Image Adress"
        defaultValue={oldTrip.image}
      />
      <AddTripButton onPress={handleUpdateTrip}>
        <AddTripButtonText>Update</AddTripButtonText>
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
export default observer(UpdateTrip);
