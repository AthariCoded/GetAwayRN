import React from "react";
import authStore from "../../stores/authStore";
import { Button, Text } from "react-native";
const Signout = () => {
  return (
    <>
      {authStore.user ? (
        <Button onPress={authStore.signout} title="Signout">
          <Text>Signout</Text>
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Signout;
