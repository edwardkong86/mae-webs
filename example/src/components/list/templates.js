import React from "react";

import ListCarousel from "./listCarousel";
import ListCategoryGrid from "./listCategoryGrid";
// import {Text} from 'react-native';
// import {getStyle} from '../tailwind';
import ListDefault from "./listDefault";
import ListReloadAmount from "./listReloadAmount";
import ListReloadTelco from "./listReloadTelco";

const TemplateList = {
    "": (props) => <ListDefault {...props} />,
    carousel: (props) => <ListCarousel {...props} />,
    categoryGrid: (props) => <ListCategoryGrid {...props} />,
    reloadTelco: (props) => <ListReloadTelco {...props} />,
    reloadAmount: (props) => <ListReloadAmount {...props} />,
};

export default TemplateList;
