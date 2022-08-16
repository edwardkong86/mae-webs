import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";

import LoadingDiscover from "@components/FnB/LoadingDiscover";

import ItemTemplateList from "../listItem/templatesItem";
import { getStyle } from "../tailwind";

const { width } = Dimensions.get("window");

// const { width: deviceWidth } = Dimensions.get("window");

const ListCarousel = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    // const { value, onChange } = field;
    const { templateName = "", theme = "", label = "", action, options } = item;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {}, []);

    const handleItemPress = (item, index) => {
        // onChange(data);
        managedCallback({ item, options });
    };

    const renderItem = ({ item, index }) => {
        const onPress = (item, index) => handleItemPress(item, index);
        return (
            ItemTemplateList[templateName] &&
            ItemTemplateList[templateName]({
                item,
                index,
                onPress,
                isLastItem: index === options.length - 1,
            })
        );
    };

    const renderSeparator = () => {
        return <View style={styles.separator} />;
    };

    //Access to all props that introduced in element.
    return (
        <View style={getStyle(theme)}>
            {/* <TitleViewAllHeader title={label} onPressViewAll={onPressViewAll} /> */}
            {isLoading ? (
                <LoadingDiscover />
            ) : (
                <FlatList
                    data={options}
                    ItemSeparatorComponent={renderSeparator}
                    renderItem={renderItem}
                    horizontal
                    nestedScrollEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `listCarousel${index}`}
                    contentContainerStyle={styles.carouselContainer}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: { paddingHorizontal: 20 },
    separator: { width: 20 },
});

// ListCarousel.propTypes = {
//     promotionData: PropTypes.array,
//     isLoading: PropTypes.bool,
//     onPress: PropTypes.func,
//     onViewAll: PropTypes.func,
// };

export default ListCarousel;
