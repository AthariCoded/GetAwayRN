import React from "react";

//native-base
//import { List } from "native-base";
import { Text, View, } from "react-native";

//observer
import { observer } from "mobx-react";

const QBoxItem = ({ qbox }) => {
    return (
        <View>
            <Text> Q: {qbox.question} by: {qbox.author} </Text>
            <Text> A: {qbox.answer}</Text>
        </View>
    )
}
export default observer(QBoxItem);