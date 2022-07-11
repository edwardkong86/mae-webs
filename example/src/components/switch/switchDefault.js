import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Alert, StyleSheet, Switch } from "react-native";

import { DARK_GREY, BLACK } from "@constants/colors";

import { getImage } from "../image/imageList";
import { getStyle } from "../tailwind";

const SwitchDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;
    const { value = false, onChange } = field;
    const { theme = "", tooltip = "", label = "", description = "" } = item;

    const onPressInfo = () => {
        Alert.alert("", tooltip);
    };

    const toggleSwitch = () => {
        onChange(!value);
    };

    //Access to all props that introduced in element.
    return (
        <View style={[styles.container, getStyle(theme)]}>
            <View style={styles.labelContainer}>
                <View style={{ flex: 1 }}>
                    {!!label && <Text style={styles.label}>{label}</Text>}
                </View>
                <View style={{}}>
                    {!!tooltip && (
                        <TouchableOpacity
                            style={styles.tooltip}
                            activeOpacity={0.8}
                            onPress={onPressInfo}
                        >
                            <Image source={getImage("ssl_info")} style={styles.tooltipImage} />
                        </TouchableOpacity>
                    )}
                    <Switch value={value} onValueChange={toggleSwitch} />
                </View>
            </View>
            {!!description && <Text style={styles.description}>{description}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        //alignItems: 'center',
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        fontFamily: "Montserrat-Medium",
        fontWeight: "400",
        fontSize: 16,
        fontFamily: "Montserrat",
        color: DARK_GREY,
    },
    switchContainer: {
        marginLeft: 10,
    },
    text: {
        flex: 1,
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: BLACK,
        paddingHorizontal: 10,
    },
    description: {
        marginTop: 5,
        fontFamily: "Montserrat",
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 12,
        color: DARK_GREY,
    },
    tooltip: {
        width: 20,
        height: 20,
    },
    tooltipImage: {
        width: 20,
        height: 20,
    },
});

export default SwitchDefault;
