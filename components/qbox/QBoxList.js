import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import { ScrollView } from "react-native";
import QBoxItem from "./QBoxItem";

//styles
import { QBoxTitle, QBoxLogo } from "./styles";

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
            <QBoxLogo>
                <QBoxTitle>Q and A:</QBoxTitle>
            </QBoxLogo>
            <ScrollView>
                <List>{qboxList}</List>
            </ScrollView>
        </>
    );
};

export default observer(QBoxList);
