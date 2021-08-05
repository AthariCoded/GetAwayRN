import React from "react";

//native-base
import { Spinner, Text } from "native-base";

//components
import { StyleSheet, View } from "react-native";
import QBoxAnswerItem from "./QBoxAnswerItem";

//stores
import qboxStore from "../../stores/qboxStore";

//observer
import { observer } from "mobx-react";

const QBoxAnswerList = ({ trip }) => {
  if (qboxStore.loading) return <Spinner />;

  //change later
  let qboxes = qboxStore.qboxes;

  qboxes = qboxes.filter((qbox) => qbox.tripId === trip.id);
  const qboxList = qboxes.map((qbox) => (
    <QBoxAnswerItem qbox={qbox} key={qbox.id} trip={trip} />
  ));

  return (
    <>
      <View style={styles.questionBox}>
        {qboxList.length !== 0 ? <Text> Questions to answer</Text> : []}
        {qboxList}
      </View>
    </>
  );
};

export default observer(QBoxAnswerList);

const styles = StyleSheet.create({
  questionBox: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    marginBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    textAlign: "left",
    alignSelf: "stretch",
  },
});
