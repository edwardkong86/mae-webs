import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "@components/Text";

import { YELLOW } from "@constants/colors";

const ListItemDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, index, onPress } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    //Access to all props that introduced in element.
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.listItem}>
            <Text text={`${item}-${index + 1}`} />
        </TouchableOpacity>
    );
};

export default ListItemDefault;

const styles = StyleSheet.create({
    listItem: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: YELLOW,
    },
});
