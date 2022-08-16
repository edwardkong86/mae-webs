import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import { SelectedCategoryList } from "@components/Common";
import Text from "@components/Text";

import * as Services from "@services/index";

import { TRANSPARENT, YELLOW, WHITE, GREY, SILVER_CHALICE } from "@constants/colors";
import { RELOAD_AMOUNT } from "@constants/strings";

import { formatReloadMobileNumber, checks2UFlow } from "@utils/dataModel/utility";

import Error from "../error";
import { getStyle } from "../tailwind";

const ListReloadAmount = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback, sharedItems } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value, onChange } = field;
    const { theme = "", label = "", options, placeholder } = item;
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [amountList, setAmountList] = useState([]);

    useEffect(() => {
        Services["getAllTelcoAmount"] &&
            Services["getAllTelcoAmount"](value?.telco?.payeeCode).then((response) => {
                const result = response?.data?.resultList ?? [];
                setAmountList(result);
            });
    }, []);

    const handleItemPress = (data, index) => {
        setSelectedAmount(data);
        const mvAmount = data?.mvAmount ?? "";

        onChange({
            ...value,
            amount: data,
            displayAmount: mvAmount.includes(".00") ? `RM ${mvAmount}` : `RM ${mvAmount}.00`,
        });
        //managedCallback({ item, data });

        // generateHaptic("impact", true);
    };

    const renderItem = ({ item, index }) => {
        const onPress = (item, index) => handleItemPress(item, index);

        function handlePress() {
            console.log("handlePress");
            onPress(item, index);
        }

        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.listView}>
                    <View style={styles.radioButton}>
                        <TouchableOpacity style={styles.circle} onPress={handlePress}>
                            {selectedAmount === item && <View style={styles.checkedCircle} />}
                        </TouchableOpacity>

                        <Text
                            fontSize={16}
                            fontWeight="600"
                            fontStyle="normal"
                            lineHeight={18}
                            letterSpacing={0}
                            textAlign="left"
                            text={item["mvAmountDisplay"]}
                            style={styles.radioBtnText}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    tailwindStyle = getStyle(theme);
    //Access to all props that introduced in element.
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[{ flex: 1 }, tailwindStyle]}>
            {value?.telco && (
                <SelectedCategoryList
                    item={value?.telco}
                    textKey="shortName"
                    imageKey="image"
                    subTextKey="mobileNo"
                    mobileNumber={formatReloadMobileNumber(value?.mobileNo.replace("+6", ""))}
                    style={{ marginHorizontal: 36 }}
                />
            )}
            <View style={{ marginHorizontal: 36 }}>
                {/* How much would... */}
                <Text
                    fontSize={20}
                    lineHeight={28}
                    fontWeight="300"
                    textAlign="left"
                    text={RELOAD_AMOUNT}
                />
                <FlatList
                    style={{ marginTop: 20 }}
                    data={amountList}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.seperator} />}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyStateView: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    subHeaderText: {
        marginTop: 10,
    },
    listView: {
        alignItems: "center",
        backgroundColor: WHITE,
        borderColor: GREY,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        flexDirection: "row",
        height: 66,
    },

    radioBtnText: {
        marginLeft: 15,
        marginTop: 5,
    },

    radioButton: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 25,
        width: "80%",
    },
    seperator: {
        backgroundColor: TRANSPARENT,
        height: 16,
        width: "100%",
    },
    selectedCategoryList: {
        marginHorizontal: 36,
    },
    checkedCircle: {
        backgroundColor: YELLOW,
        borderRadius: 7,
        height: 14,
        width: 14,
    },

    circle: {
        alignItems: "center",
        borderColor: SILVER_CHALICE,
        borderRadius: 10,
        borderWidth: 1,
        height: 20,
        justifyContent: "center",
        marginTop: 5,
        width: 20,
    },
});

export default ListReloadAmount;
