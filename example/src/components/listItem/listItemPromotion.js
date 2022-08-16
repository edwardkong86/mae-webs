import React from "react";

import PromotionsCarouselCard from "@components/Cards/PromotionsCarouselCard";

const listItemPromotion = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, index, onPress, isLastItem } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    if (!item.title) {
        item.title = item.categoryName;
    }

    //Access to all props that introduced in element.
    return (
        <PromotionsCarouselCard {...props} item={item} onPress={onPress} isLastItem={isLastItem} />
    );
};

export default listItemPromotion;
