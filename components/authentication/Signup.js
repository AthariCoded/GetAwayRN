import React, { useState } from "react";
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "./styles";
// stores
import authStore from "../../stores/authStore";
import { Button } from "native-base";
import { Text } from "react-native";
import { observer } from "mobx-react";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to sign in
      </AuthOther>
      {/* 
        You can use this condition instead:
        {authStore.user && <Button ...>...</Button>}
        Does the same thing, simpler code.
       */}
      {authStore.user ? (
        <Button onPress={authStore.signout}>
          <Text>Signout</Text>
        </Button>
      ) : (
        <></>
      )}
    </AuthContainer>
  );
};

export default observer(Signup);
