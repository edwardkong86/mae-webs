import React from "react";

import ButtonDefault from "./buttonDefault";
import ButtonIconDefault from "./buttonIconDefault";
// import ButtonLeftDefault from "./buttonLeftDefault";
// import ButtonPrimaryDefault from "./buttonPrimaryDefault";
// import ButtonRightDefault from "./buttonRightDefault";

const TemplateList = {
    // leftButton: props => <ButtonLeftDefault {...props} />,
    // rightButton: props => <ButtonRightDefault {...props} />,
    buttonIcon: (props) => <ButtonIconDefault {...props} />,
    // buttonPrimary: (props) => <ButtonPrimaryDefault {...props} />,
    // "": (props) => <ButtonPrimaryDefault {...props} />,
    default: (props) => <ButtonDefault {...props} />,
};

export default TemplateList;
