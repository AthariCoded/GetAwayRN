import React from "react";
import { useState } from "react";

//react- native
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

//observer
import { observer } from "mobx-react";

//stores
import authStore from "../../stores/authStore";
import qboxStore from "../../stores/qboxStore";

const QBoxAdd = ({ trip }) => {
    const [ques, setQues] = useState({
        question: "",
        answer: "",
        author: "",
        authorId: "",
    });

    const submitHandler = async () => {
        await qboxStore.qboxAdd(ques, trip.id);
    }
    return (
        <View>
            {authStore.user.id !== trip.userId && (
                <View>
                    <Text style={styles.qTitle}>Add a question </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(question) => setQues({ ...ques, question })}
                        placeholder="Add a question..."
                    />
                    <Button
                        onPress={() => submitHandler()}
                        title="Add"
                        color="gray"
                    ></Button>
                </View>
            )}
        </View>
    )
}
export default observer(QBoxAdd);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 10,
        margin: 5,
        width: 200,
    },
    qTitle: {
        color: "#777",
        paddingTop: 10,
        marginTop: 5,
        width: 200,
    },
});