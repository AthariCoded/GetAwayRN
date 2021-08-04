import React from "react";

import { useNavigation } from "@react-navigation/native";

//styles
import { PlaneButtonStyled, WishTextStyled } from "./styles";

//native-base
import { Button } from "native-base";

// stores
import wishStore from "../../stores/wishStore";
//observer
import { observer } from "mobx-react";
const WishButton = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.navigate("WishList")}>
      <PlaneButtonStyled name="plane-departure" size={24} />
      <WishTextStyled>{wishStore.totalQuantity}</WishTextStyled>
    </Button>
  );
};

export default observer(WishButton);
