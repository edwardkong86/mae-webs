import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { SEPARATOR_GRAY } from "@constants/colors";

import ItemTemplateList from "../listItem/templatesItem";
import { getStyle } from "../tailwind";

const ListDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value, onChange } = field;
    const { theme = "", label = "", templateName = "" } = item;

    const handleItemPress = (data, index) => {
        console.log("handleItemPress", data, index);
        onChange(data);
        managedCallback({ item, data });
    };

    const renderItem = ({ item, index }) => {
        const onPress = (item, index) => handleItemPress(item, index);
        return (
            ItemTemplateList[templateName] &&
            ItemTemplateList[templateName]({ item: label, index, onPress })
        );
    };
    //Access to all props that introduced in element.
    return (
        <FlatList
            style={getStyle(theme)}
            data={[...Array(parseInt(item.value ?? 1)).keys()]}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            keyExtractor={(item, index) => `${index}`}
        />
    );
};

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: SEPARATOR_GRAY,
        flex: 1,
        height: 1,
        marginHorizontal: 24,
    },
});

export default ListDefault;
