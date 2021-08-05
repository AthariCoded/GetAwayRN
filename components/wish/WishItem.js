import React from "react";
import { List } from "native-base";
import { Text } from "react-native";

import wishStore from "../../stores/wishStore";

import { AntDesignIcon } from "./styles";
const WishItem = ({ wish }) => {
  return (
    <List>
      <Text style={{ fontSize: 18, paddingTop: 15, justifyContent: "center" }}>
        {wish.title}
      </Text>
      <AntDesignIcon
        name="minuscircleo"
        size={18}
        onPress={() => wishStore.deleteFromWish(wish.id)}
        style={{ alignSelf: "flex-end", marginTop: -20, marginBottom: 15 }}
      />
    </List>
  );
};

export default WishItem;
