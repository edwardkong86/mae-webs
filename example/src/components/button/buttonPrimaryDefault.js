import React from "react";
import { StyleSheet } from "react-native";

import ActionButton from "@components/Buttons/ActionButton";
import Text from "@components/Text";

import { BLACK, WHITE, YELLOW, LIGHT_BLACK, LIGHT_YELLOW } from "@constants/colors";

const buttonPrimaryDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, managedCallback, isDisabled = true } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { theme = "", label = "" } = item;

    const onPress = () => {
        managedCallback({ item });
    };
    //Access to all props that introduced in element.

    return (
        <ActionButton
            activeOpacity={0.5}
            backgroundColor={isDisabled ? LIGHT_YELLOW : YELLOW}
            fullWidth
            disabled={isDisabled}
            componentCenter={
                <Text
                    text={label}
                    fontSize={14}
                    fontWeight="600"
                    lineHeight={18}
                    color={isDisabled ? LIGHT_BLACK : BLACK}
                />
            }
            onPress={onPress}
        />
    );
};

export default buttonPrimaryDefault;
