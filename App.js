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
};
export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}></ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
