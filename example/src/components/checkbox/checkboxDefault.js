import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";

import { YELLOW, DARK_GREY, BLACK } from "../../../constants/colors";
import { getImage } from "../image/imageList";
import { getStyle } from "../tailwind";

const CheckboxDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, child, children, field, error, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { theme = "", tooltip = "", label = "", action } = item;
    const { value, onChange } = field;

    console.log("CheckboxDefault", value);
    const onValueChange = () => {
        if (action) {
            managedCallback({ item });
            return;
        }
        console.log("onValueChange", value);
        onChange(!value);
    };

    const onPressInfo = () => {
        Alert.alert("", tooltip);
    };
    //Access to all props that introduced in element.
    return (
        <View style={[styles.container, getStyle(theme)]}>
            <CheckBox
                value={value}
                onValueChange={onValueChange}
                style={styles.checkbox}
                tintColors={{
                    true: YELLOW,
                    false: DARK_GREY,
                }}
                tintColor={DARK_GREY}
                boxType="square"
                onFillColor={YELLOW}
                onCheckColor="#505050"
                onAnimationType="fill"
                offAnimationType="fill"
                onTintColor={DARK_GREY}
            />
            <Text style={styles.text}>{label}</Text>
            {!!tooltip && (
                <TouchableOpacity style={styles.tooltip} activeOpacity={0.8} onPress={onPressInfo}>
                    <Image source={getImage("ssl_info")} style={styles.tooltipImage} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 30,
    },
    checkbox: {
        width: 20,
        height: 20,
    },
    text: {
        flex: 1,
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: BLACK,
        paddingHorizontal: 10,
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

export default CheckboxDefault;
