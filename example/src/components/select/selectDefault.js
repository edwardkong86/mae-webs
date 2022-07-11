import React, { useRef, useState} from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Modal from "react-native-modalbox";
import ScrollPicker from "react-native-picker-scrollview";

import ActionButton from "@components/Buttons/ActionButton";
import DropDownInput from "@components/Inputs/DropDownInput";
import Text from "@components/Text";

import { BLACK, BLUE, DARK_GREY, GREY_200, WHITE, YELLOW } from "@constants/colors";

import Error from "../error";
import { getStyle } from "../tailwind";

const SelectDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value, onChange } = field;
    const {
        theme = "",
        label = "",
        options,
        placeholder,
        expandedMode = false,
        leftButtonText = "Close",
        rightButtonText = "Done",
    } = item;

    const scrollPicker = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [selected, setSelected] = useState(
        value && value > -1
            ? { data: options[value], index: value }
            : { data: { label: placeholder }, index: 0 }
    );

    const handlePress = () => {
        setShowMenu(true);
    };

    const handleClose = () => {
        setShowMenu(false);
    };

    const handleDone = () => {
        setShowMenu(false);
        onChange(selected?.index);
    };

    const onValueChange = (data, index) => {
        setSelected({ data, index });
    };

    const handleItemPress = (data, index) => {
        console.log("handleItemPress", data, index);
        scrollPicker?.current?.scrollToIndex(index);
        setSelected({ data, index });

        // generateHaptic("impact", true);
    };

    const renderItem = (data, index, isSelected) => {
        const onPress = (data, index) => handleItemPress(data, index);

        function handlePress() {
            console.log("handlePress");
            onPress(data, index);
        }

        return (
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.9}
                style={styles.itemRowContainer}
            >
                {isSelected ? (
                    <View style={styles.itemRowSelectedContainer}>
                        <Text
                            fontSize={16}
                            fontWeight="600"
                            lineHeight={22}
                            color={BLACK}
                            text={data.label}
                            numberOfLines={2}
                        />
                    </View>
                ) : (
                    <Text
                        fontSize={16}
                        fontWeight="normal"
                        lineHeight={22}
                        color={DARK_GREY}
                        text={data.label}
                        numberOfLines={2}
                    />
                )}
            </TouchableOpacity>
        );
    };
    const tailwindStyle = getStyle(theme);
    //Access to all props that introduced in element.
    console.log("options", options);
    return (
        <View style={[tailwindStyle]}>
            <DropDownInput {...item} title={selected?.data?.label} onPress={handlePress} />
            <Error {...props} />
            {options?.length > 0 && (
                <Modal
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    isOpen={showMenu}
                    onRequestClose={handleClose}
                    hideModalContentWhileAnimating
                    useNativeDriver
                    position={"bottom"}
                    swipeArea={500}
                    swipeThreshold={10}
                    swipeToClose={true}
                    backdropPressToClose={true}
                    transparent
                    coverScreen={true}
                    backdropOpacity={0.8}
                    style={styles.modal}
                >
                    <View style={styles.containerBottom}>
                        <TouchableWithoutFeedback onPress={handleClose} style={styles.touchable}>
                            <View style={styles.empty}>
                                <View />
                            </View>
                        </TouchableWithoutFeedback>
                        <Animatable.View
                            animation="slideInUp"
                            duration={300}
                            useNativeDriver
                            style={styles.containerModal}
                        >
                            {/* Top bar section */}
                            <View style={styles.containerTopBar}>
                                {/* Close button */}
                                <View style={styles.btnClose}>
                                    <TouchableOpacity onPress={handleClose}>
                                        <Text
                                            fontSize={14}
                                            fontWeight="600"
                                            lineHeight={18}
                                            textAlign="left"
                                            color={BLUE}
                                            text={leftButtonText}
                                        ></Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Done button */}
                                <View style={styles.btnDone}>
                                    <ActionButton
                                        backgroundColor={YELLOW}
                                        borderRadius={15}
                                        height={30}
                                        width={96}
                                        componentCenter={
                                            <Text
                                                fontSize={12}
                                                color={BLACK}
                                                fontWeight="600"
                                                lineHeight={15}
                                                text={rightButtonText}
                                            />
                                        }
                                        onPress={handleDone}
                                    />
                                </View>
                            </View>

                            {/* Picker section */}
                            <View style={styles.containerPicker}>
                                <ScrollPicker
                                    ref={scrollPicker}
                                    dataSource={options}
                                    selectedIndex={value}
                                    itemHeight={expandedMode ? 64 : 44}
                                    wrapperHeight={240}
                                    wrapperColor={WHITE}
                                    highlightColor={GREY_200}
                                    renderItem={renderItem}
                                    onValueChange={onValueChange}
                                />
                            </View>
                        </Animatable.View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    btnClose: {
        backgroundColor: WHITE,
        flex: 1,
    },
    btnDone: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: WHITE,
    },
    containerBottom: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
    },
    containerModal: {
        height: 300,
        width: "100%",
    },
    containerPicker: {
        height: 240,
        width: "100%",
    },
    containerTopBar: {
        alignItems: "center",
        backgroundColor: WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "row",
        height: 60,
        paddingHorizontal: 24,
        width: "100%",
    },
    empty: {
        flex: 1,
        width: "100%",
    },
    itemRowContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    itemRowSelectedContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    modal: {
        justifyContent: "flex-end",
        height: "100%",
        backgroundColor: "transparent",
        zIndex: 10,
    },
    touchable: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
});

export default SelectDefault;
