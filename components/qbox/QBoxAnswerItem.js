import React from "react";

import { Text, View, StyleSheet } from "react-native";
import QBoxAnswerAdd from "./QBoxAnswerAdd";
//observer
import { observer } from "mobx-react";

const QBoxAnswerItem = ({ qbox, trip }) => {
    return (
        <View>
            {(qbox.answer === "") &&

                (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.authorStyle}>{qbox.author} asked: </Text>
                            <Text>{qbox.question} </Text>
                        </View>

                        <View style={styles.container}>
                            <QBoxAnswerAdd trip={trip} qbox={qbox} key={qbox.id} />
                        </View>
                    </View>
                )
            }
        </View>
    )
}
export default observer(QBoxAnswerItem);

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
