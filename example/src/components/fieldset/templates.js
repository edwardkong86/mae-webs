import React from "react";
// import {
//     View,
//     ImageBackground,
//     ScrollView,
//     Text,
//     KeyboardAvoidingView,
//     Platform,
// } from "react-native";

// import * as Assets from "../../../assets";
import { getStyle } from "../tailwind";
import FieldsetHeader from "./fieldsetHeader";

const TemplateList = {
    header: (props) => <FieldsetHeader {...props} />,
    // keyboardAvoidingView: (props) => (
    //     <KeyboardAvoidingView
    //         style={getStyle(props.item?.theme) ?? { flex: 1 }}
    //         behavior={Platform.OS === "ios" ? "padding" : "height"}
    //     >
    //         {props.child && props.child}
    //     </KeyboardAvoidingView>
    // ),
    // imageBackground: (props) => (
    //     <ImageBackground
    //         source={props.item?.value}
    //         style={[{ width: "100%", height: "100%" }, getStyle(props.item?.theme)]}
    //     >
    //         {props.child && props.child}
    //     </ImageBackground>
    // ),
    // blueBackground: (props) => (
    //     <ImageBackground
    //         {...props.item}
    //         source={Assets.images.blueBackground}
    //         style={[{ width: "100%", height: "100%" }, getStyle(props.item?.theme)]}
    //     >
    //         {props.child && props.child}
    //     </ImageBackground>
    // ),
    // scrollViewHandledKeyboard: (props) => (
    //     <ScrollView
    //         keyboardShouldPersistTaps="handled"
    //         showsVerticalScrollIndicator={false}
    //         style={[{ flex: 1 }, getStyle(props.item?.theme)]}
    //     >
    //         {props.child && props.child}
    //     </ScrollView>
    // ),
    // text: (props) => (
    //     <Text style={getStyle(props.item?.theme) ?? { flex: 1 }}>{props.child && props.child}</Text>
    // ),
    "": (props) => (
        <div style={getStyle(props.item?.theme) ?? { flex: 1 }}>
            {props.child && props.child}
        </div>
    ),
    block: (props) => (
        <div style={getStyle(props.item?.theme) ?? { flex: 1, paddingHorizontal: 24 }}>
            {props.child && props.child}
        </div>
    ),
};

export default TemplateList;
