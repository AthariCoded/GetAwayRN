import React from "react";

//native-base
import { Spinner } from "native-base";

//components
import { StyleSheet, View } from "react-native";
import QBoxItem from "./QBoxItem";
import QBoxAdd from "./QBoxAdd";

//stores
import qboxStore from "../../stores/qboxStore";

//observer
import { observer } from "mobx-react";

const QBoxList = ({ trip }) => {
  if (qboxStore.loading) return <Spinner />;

  //change later
  let qboxes = qboxStore.qboxes;

  qboxes = qboxes.filter((qbox) => qbox.tripId === trip.id);
  const qboxList = qboxes.map((qbox) => <QBoxItem qbox={qbox} key={qbox.id} />);

  return (
    <>
      <QBoxAdd trip={trip} />
      <View style={styles.questionBox}>{qboxList}</View>
    </>
  );
};

export default observer(QBoxList);

const styles = StyleSheet.create({
  questionBox: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    // marginBottom: 40,
    paddingTop: 10,
    marginTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    textAlign: "left",
    alignSelf: "stretch",
  },
});
