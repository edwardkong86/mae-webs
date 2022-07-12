import React from "react";
// import { TouchableOpacity, StyleSheet } from "react-native";
import {Button} from "mae-webs";
// import { getStyle } from "../tailwind";

const ButtonDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, child, children, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { label = "", theme = "" } = item;
console.log("ButtonDefault",props)
    const onClick = () => {
        managedCallback({ item });
    };
    //Access to all props that introduced in element.
    return (
        <Button block shape='rounded' onClick={onClick}>
            {label || child || children}
        </Button>
    );
};

export default ButtonDefault;
