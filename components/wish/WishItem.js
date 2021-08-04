import React from "react";
import { List } from "native-base";
import { Text } from "react-native";

import wishStore from "../../stores/wishStore";

import { AntDesignIcon } from "./styles";
const WishItem = ({ wish }) => {
  return (
    <List>
      <Text>{wish.title}</Text>
      <AntDesignIcon
        name="minuscircleo"
        size={24}
        onPress={() => wishStore.deleteFromWish(wish.id)}
      />
    </List>
  );
};

export default WishItem;
