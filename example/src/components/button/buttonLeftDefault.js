import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { BLACK, WHITE } from "../../../constants/colors";

const ButtonLeftDefault = (props) => {
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
        backgroundColor: BLACK,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        textAlign: "center",
        color: WHITE,
    },
});

export default ButtonLeftDefault;
