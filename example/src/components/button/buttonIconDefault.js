import React from "react";
import Icon from "@ant-design/icons";

import IconList from "./iconList";
import { getStyle } from "../tailwind";

const ButtonIcon = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;
    
    const {theme = "", value} = item;

    const onClick = () => {
        managedCallback({ item });
    };

    //Access to all props that introduced in element.
    return (
        <Icon component={IconList[value]} {...props} style={getStyle(theme)} onClick={onClick} />
    );
};

export default ButtonIcon;
