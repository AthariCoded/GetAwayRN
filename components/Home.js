import React from "react";
import { Text } from "react-native";
import Register from "../components/authentication/Register";
import { HomeBackground } from "../styles";

const Home = () => {
  return (
    <HomeBackground>
      <Text>GetAway</Text>
      <Register />
    </HomeBackground>
  );
};
export default Home;
