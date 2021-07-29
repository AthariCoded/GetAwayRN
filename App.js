import "react-native-gesture-handler";
import React from "react";

// styles
import { ThemeProvider } from "styled-components";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import RootNavigator from "./components/Navigation/index";
const theme = {
  mainColor: "#bbd0ff",
  backgroundColor: "#ff758f",
  pink: "#f283a2",
  red: "red",
  white: "#fff",
  blue: "#90d4ed",
  black: "#000000",
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
