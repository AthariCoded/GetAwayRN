import React from "react";

//native-base
//import { List } from "native-base";
import { Text, View, StyleSheet } from "react-native";

//observer
import { observer } from "mobx-react";

const QBoxItem = ({ qbox }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.authorStyle}>{qbox.author} asked: </Text>
        <Text>{qbox.question} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.authorStyle}>
          {qbox.answer === "" ? "not yet answered" : "Answer: "}
        </Text>
        <Text>{qbox.answer} </Text>
      </View>
    </View>
  );
};
export default observer(QBoxItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 4,
  },
  authorStyle: {
    color: "#777",
    fontSize: 14,
    fontStyle: "italic",
  },
});
