import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import { ScrollView, StyleSheet, View } from "react-native";
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
    const qboxList = qboxes.map((qbox) => (

        <QBoxItem qbox={qbox} key={qbox.id} /> //navigation={navigation}

    ));

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
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: 10,
        paddingHorizontal: 70,

    },
});
