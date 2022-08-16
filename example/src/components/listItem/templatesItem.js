import React from "react";

import ListItemDefault from "./listItemDefault";
import ListItemPromotion from "./listItemPromotion";

const ItemTemplateList = {
    "": (props) => <ListItemDefault {...props} />,
    carousel: (props) => <ListItemPromotion {...props} />,
};

export default ItemTemplateList;
