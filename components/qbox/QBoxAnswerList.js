import React from "react";

//native-base
import { Spinner } from "native-base";

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
            <View style={styles.questionBox}>{qboxList}</View>
        </>
    );
};

export default observer(QBoxAnswerList);

const styles = StyleSheet.create({
    questionBox: {
        backgroundColor: "white",
        marginBottom: 40,
        paddingHorizontal: 30,
        flex: 1,
        textAlign: "left",
    },
});
