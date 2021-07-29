import React from "react";
// styles
import { ButtonLogin, ButtonStyling } from "../../styles";
// libraries
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
// stores
import authStore from "../../stores/authStore";
const Register = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Sign in",
        "Time to signin ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <ButtonLogin>
      <ButtonStyling onPress={handlePress}>LOGIN</ButtonStyling>
    </ButtonLogin>
  );
};
export default Register;
