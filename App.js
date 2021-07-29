import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#222222",
  backgroundColor: "white",
  secondaryColor: "#4B4B4B",
  lightColor: "#B3B3B3",
  pinkColor: "#ED3293",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
