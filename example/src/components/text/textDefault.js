import React from "react";
import { View, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";

import Text from "@components/Text";
import TextInput from "@components/TextInput";

import { DARK_GREY, BLACK } from "@constants/colors";

import { getImage } from "../image/imageList";
import { getStyle } from "../tailwind";

const TextDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, child, field, error, sharedItems } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;
    const {
        theme = "",
        tooltip = "",
        label = "",
        placeholder = "",
        description = "",
        editable = true,
        prefix = "",
        multiline = true,
        disabled = null,
    } = item;
    const { value, onChange } = field;

    const onChangeText = (value) => {
        onChange(value);
    };

    const onPressInfo = () => {
        Alert.alert("", tooltip);
    };

    const isWatch = disabled && sharedItems?.getValues(disabled.slice(1, -1));
    //Access to all props that introduced in element.
    return (
        <View style={[styles.container, getStyle(theme)]}>
            <View style={styles.labelContainer}>
                <View style={{ flex: 1 }}>
                    {!!label && (
                        <Text textAlign="left" style={styles.label}>
                            {label}
                        </Text>
                    )}
                </View>
                {!!tooltip && (
                    <TouchableOpacity
                        style={styles.tooltip}
                        activeOpacity={0.8}
                        onPress={onPressInfo}
                    >
                        <Image source={getImage("ssl_info")} style={styles.tooltipImage} />
                    </TouchableOpacity>
                )}
            </View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={[
                    styles.textInput,
                    //!isWatch && { color: BLACK, borderBottomWidth: 1, borderColor: BLACK },
                ]}
                placeholder={placeholder}
                placeholderTextColor={"#888888"}
                //keyboardType={keyboardType}
                // maxLength={maxLength}
                editable={!isWatch}
                multiline={multiline}
                // pointerEvents={pointerEvents ? pointerEvents : 'auto'}
            />
            {!!description && <Text style={styles.description}>{description}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontFamily: "Montserrat-Medium",
        fontWeight: "400",
        fontSize: 14,
        fontFamily: "Montserrat",
    },
    textInput: {
        marginTop: 4,
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: DARK_GREY,
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

export default TextDefault;
