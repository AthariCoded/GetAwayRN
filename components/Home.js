import React from "react";
import { Text } from "react-native";
// instad of "../components/" just write "./" -.-
// also, there's no Register.js there. How is this working?
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
