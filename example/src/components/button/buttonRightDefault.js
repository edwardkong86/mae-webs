import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { YELLOW, BLACK } from "../../../constants/colors";

const ButtonRightDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { theme = "", label = "" } = item;

    const onPress = () => {
        managedCallback({ item });
    };
    //Access to all props that introduced in element.
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
            {<Text style={styles.buttonText}>{label}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        height: 60,
        backgroundColor: YELLOW,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        textAlign: "center",
        color: BLACK,
    },
});

export default ButtonRightDefault;
