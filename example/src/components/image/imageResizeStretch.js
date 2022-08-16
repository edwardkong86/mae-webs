import React from "react";

import { getStyle } from "../tailwind";
import { getImage } from "./imageList";

const ImageResizeStretch = (props) => {
    //Access to main props
    //Injected at runtime
    const { item } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value = "", theme = "" } = item;
    console.log("ImageResizeStretch",getStyle(theme))

    //Access to all props that introduced in element.
    return (
        <img
            src={getImage(value) ?? null}          
            style={getStyle(theme)}
        />
    );
};

export default ImageResizeStretch;