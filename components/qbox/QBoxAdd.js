import React from "react";

import { Text, View, } from "react-native";

//observer
import { observer } from "mobx-react";

const QBoxAdd = () => {
    return (
        <View>
            <Text>Add a question </Text>
        </View>
    )
}
export default observer(QBoxAdd);