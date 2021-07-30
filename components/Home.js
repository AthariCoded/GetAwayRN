import React from "react";
import { Text } from "react-native";
import Register from "../components/authentication/Register";
import { HomeBackground, ButtonStyling } from "../styles";
import authStore from "../stores/authStore";
import Signout from "../components/authentication/Signout";
const Home = () => {
  return (
    <HomeBackground>
      <Text>GetAway</Text>

      {/* <ButtonStyling onPress={authStore.signout}></ButtonStyling> */}
      <Register />
    </HomeBackground>
  );
};
export default Home;
