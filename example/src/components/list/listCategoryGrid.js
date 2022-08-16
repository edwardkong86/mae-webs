import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

import CategoryGrid from "@components/SSL/CategoryGrid";
import { ActionButtonMenus } from "@components/SSL/CategoryGrid";
import Text from "@components/Text";

import * as Services from "@services/index";

import { SEPARATOR_GRAY, BLACK, YELLOW } from "@constants/colors";

import Assets from "@assets";

import { getStyle } from "../tailwind";

const { width } = Dimensions.get("window");

// const { width: deviceWidth } = Dimensions.get("window");

const ListCategoryGrid = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value, onChange } = field;
    const { theme = "", label = "", action, options } = item;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // if (action) {
        //     Services["getDPApi"] &&
        //         Services["getDPApi"]({ url: action.actionURL }).then((response) => {
        //             console.log("getDPApi", action);
        //             setCategories(
        //                 response?.result?.categories?.map((obj) => {
        //                     return {
        //                         value: obj?.categoryId,
        //                         title: obj?.categoryName,
        //                         categoryDesc: obj?.categoryDesc,
        //                         iconImage: obj?.categoryDefaultLogo
        //                             ? { uri: obj.categoryDefaultLogo }
        //                             : Assets.icMAE,
        //                     };
        //                 }) ?? []
        //             );
        //         });
        // }
    }, []);

    const handleItemPress = (data, index) => {
        console.log("handleItemPress", data, index);
        onChange(data);
        managedCallback({ item, data });
    };

    //Access to all props that introduced in element.
    const horizontalMargin = 24 * 2;
    const horizontalInnerPadding = 12 * 3;
    const thumbWidth = (width - horizontalMargin - horizontalInnerPadding) / 4;
    const thumbFontSize = width * 0.032;

    if (options?.length == 0) return null;

    return (
        <View style={getStyle(theme)}>
            <View style={styles.categoryGridTitle}>
                <Text
                    fontSize={16}
                    fontWeight="600"
                    fontStyle="normal"
                    letterSpacing={0}
                    lineHeight={19}
                    textAlign="left"
                    text={label} //"What would you like to order?"
                    color={BLACK}
                />
            </View>
            <View style={styles.categoryView}>
                <Animatable.View animation="fadeIn" duration={500} useNativeDriver>
                    <ActionButtonMenus
                        actions={options}
                        onFunctionEntryPointButtonPressed={handleItemPress}
                        actionWidth={thumbWidth}
                        actionHeight={88}
                        actionFontSize={thumbFontSize > 10.5 ? 10.5 : thumbFontSize}
                        itemPerPage={8}
                    />
                </Animatable.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryGridTitle: {
        paddingHorizontal: 24,
    },
    categoryView: {
        alignItems: "center",
        flex: 1,
        marginBottom: 36,
        marginTop: 24,
    },
});

export default ListCategoryGrid;
