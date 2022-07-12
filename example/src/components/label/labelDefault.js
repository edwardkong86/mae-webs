import React from "react";

import { getStyle } from "../tailwind";

const DEFAULT = {
    fontSize: 14,
    fontFamily: 'Montserrat',
    textAlign: "center",
    color: '#000000',
};

const LabelDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { action, theme = "", label = "", header = "", description = "" } = item;

    const onPress = () => {
        managedCallback({ item });
    };
    console.log("LabelDefault", props)
    //Access to all props that introduced in element.
    if (header?.length > 0 && description?.length > 0) {
        return (
            <>
                <div
                    style={{...DEFAULT, fontSize:14, fontWeight:400, lineHeight:"20px", textAlign:"left", ...getStyle(theme)}}
                    // onPress={onPress}
                >
                    {header}
                </div>
                {description?.length > 0 && (
                    <div
                        style={{...DEFAULT, marginTop: 4, fontSize:16, fontWeight:600, lineHeight:"20px", textAlign:"left", ...getStyle(theme)}}
                        // onPress={onPress}
                    >
                        {description}
                    </div>
                )}
            </>
        );
    }
    return action ? (
        <a style={{...DEFAULT, ...getStyle(theme)}} onPress={onPress}>
            {label}
        </a>
    ) : (
        <div style={{...DEFAULT, ...getStyle(theme)}}>
            {label}
        </div>
    );
};

export default LabelDefault;
