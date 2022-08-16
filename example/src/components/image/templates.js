import React from "react";

import ImageDefault from "./imageDefault";
// import ImagePressable from "./imagePressable";
import ImageResizeStretch from "./imageResizeStretch";

const TemplateList = {
    // pressableImage: (props) => <ImagePressable {...props} />,
    resizeStretch: (props) => <ImageResizeStretch {...props} />,
    "": (props) => <ImageDefault {...props} />,
};

export default TemplateList;
