import React from "react";
import { useNavigation } from "@react-navigation/native";
//stores

// styles
import { UpdateButtonStyle } from "./styles";
//mobx
import { observer } from "mobx-react";
const UpdateButton = ({ oldTrip }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("UpdateTrip", { oldTrip });
  };

  return (
    <>
      <UpdateButtonStyle onPress={handlePress}>Update trip</UpdateButtonStyle>
    </>
  );
};

export default observer(UpdateButton);
