import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { RED_ERROR } from "@constants/colors";

const Error = (props) => {
    const { name, item, error } = props;
    const errorMsg = (error && error[name] && error[name].message) || "";

    if (item === undefined) return null;

    const { description } = item;
    return (
        <View style={styles.container}>
            {!!description && (
                <Text
                    fontSize={12}
                    lineHeight={16}
                    textAlign="left"
                    fontStyle="italic"
                    text={description}
                    style={styles.errorText}
                />
            )}
            <Text
                fontSize={12}
                lineHeight={16}
                textAlign="left"
                color={RED_ERROR}
                text={errorMsg}
                style={styles.errorText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
    },
    errorText: {
        flexShrink: 1,
    },
    descriptionText: {
        flexShrink: 1,
    },
});

export default Error;
