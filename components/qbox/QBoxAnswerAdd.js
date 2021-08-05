import React from "react";
import { useState } from "react";

//react- native
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

//observer
import { observer } from "mobx-react";

//stores
import authStore from "../../stores/authStore";
import qboxStore from "../../stores/qboxStore";

const QBoxAnswerAdd = ({ trip, qbox }) => {
  const [ans, setAns] = useState(qbox);

  const submitHandler = async () => {
    await qboxStore.qboxUpdate(ans, qbox.id);
  };

  return (
    <View>
      {authStore.user.id === trip.userId && (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => setAns({ ...ans, answer })}
            placeholder="Add an answer..."
          />
          <Button
            onPress={() => submitHandler()}
            title="Add"
            color="gray"
          ></Button>
        </View>
      )}
    </View>
  );
};
export default observer(QBoxAnswerAdd);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    // margin: 2,
    width: 200,
  },
});
