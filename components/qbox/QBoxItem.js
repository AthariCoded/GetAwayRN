import React from "react";

//native-base
//import { List } from "native-base";
import { Text, View, } from "react-native";

//styled components
import {
    TripItemTitle,
    TripListItem,
} from "./styles";

//observer
import { observer } from "mobx-react";

const QBoxItem = ({ qbox }) => {
    return (
        <View>
            <Text> Q: {qbox.question}</Text>
            <Text> A: {qbox.answer}</Text>
        </View>
    )
}
export default observer(QBoxItem);