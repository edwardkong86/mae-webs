import React from "react";
import { View, StyleSheet } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

import ScreenLayout from "@layouts/ScreenLayout";

// import { WHITE } from "@constants/colors";

// import { getStyle } from "../tailwind";

const FieldsetScreenLayout = (props) => {
    // const safeAreaInsets = useSafeAreaInsets();
    //Access to main props
    //Injected at runtime
    const { item, child } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { label = "", theme = "" } = item;

    //Access to all props that introduced in element.
    return (
        <ScreenLayout {...props} paddingHorizontal={0} paddingBottom={0} paddingTop={16}>
            {child && child}
        </ScreenLayout>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 24,
//         paddingTop: 7,
//         width: "100%",
//         zIndex: 1,
//     },
// });

export default FieldsetScreenLayout;
