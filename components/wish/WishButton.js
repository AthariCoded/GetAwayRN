import React from "react";

import { useNavigation } from "@react-navigation/native";

//styles
import { PlaneButtonStyled, WishTextStyled } from "./styles";

//native-base
import { Button, Center } from "native-base";

// stores
import wishStore from "../../stores/wishStore";
//observer
import { observer } from "mobx-react";
import { Octicons } from "@expo/vector-icons";
import { left, right } from "styled-system";
const WishButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("WishList")}
      style={{
        backgroundColor: "rgba(52, 52, 52, 0)",
        alignSelf: "flex-end",
        marginTop: -10,
      }}
    >
      {/* <PlaneButtonStyled name="plane-departure" size={24} /> */}
      <Octicons name="bookmark" size={34} color="#ED3293" />
      <WishTextStyled>{wishStore.totalQuantity}</WishTextStyled>
    </Button>
  );
};

export default observer(WishButton);
