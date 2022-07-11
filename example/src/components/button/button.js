import React from "react";

import TemplateList from "./templates";

const Button = (props) => {
    //Access to main props
    //Injected at runtime
    const { item } = props;

    console.log("Button",item)
    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { templateName = "" } = item;
    //Access to all props that introduced in element.
    return (TemplateList[templateName] && TemplateList[templateName](props)) || null;
};

export default Button;
