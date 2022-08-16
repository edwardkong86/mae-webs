import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Keyboard } from "react-native";

import DynamicImage from "@components/Others/DynamicImage";
import SearchInput from "@components/SearchInput";
import Text from "@components/Text";

import * as Services from "@services/index";

import { SEPARATOR_GRAY } from "@constants/colors";
import { RELOAD, EMPTY_HEADER, EMPTY_SUBHEADER } from "@constants/strings";

import Error from "../error";
import { getStyle } from "../tailwind";

const ListReloadTelco = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, field, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value, onChange } = field;
    const { theme = "", label = "", options, placeholder } = item;

    const [showSearchInput, setShowSearchInput] = useState(false);
    const [telcoList, setTelcoList] = useState([]);
    const [searchTelco, setSearchTelco] = useState([]);

    useEffect(() => {
        Services["getAllTelcoList"] &&
            Services["getAllTelcoList"]().then((respone) => {
                const result = respone?.data?.resultList ?? [];
                setTelcoList(result);
                setSearchTelco(result);
            });
    }, []);

    const handleItemPress = (data, index) => {
        // console.log("handleItemPress", data, index);
        onChange({ telco: data });
        managedCallback({ item });

        // generateHaptic("impact", true);
    };

    const renderItem = ({ item, index }) => {
        const onPress = (item, index) => handleItemPress(item, index);

        function handlePress() {
            console.log("handlePress");
            onPress(item, index);
        }

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePress}
                style={{ marginBottom: index === searchTelco.length - 1 ? 30 : 0 }}
            >
                <View style={styles.listView}>
                    <DynamicImage item={item} />
                    <Text
                        fontSize={14}
                        fontWeight="600"
                        fontStyle="normal"
                        lineHeight={18}
                        letterSpacing={0}
                        color="#000000"
                        text={item["shortName"]}
                        style={styles.title}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    const doSearchToogle = () => {
        setShowSearchInput(!showSearchInput);
        setSearchTelco(telcoList);
    };

    const onSearchTextChange = (val) => {
        const text = val?.trim()?.toLowerCase();

        if (text) {
            const filteredList = telcoList.filter((item) =>
                item.shortName.toLowerCase().match(text)
            );
            setSearchTelco(filteredList);
        } else {
            Keyboard.dismiss();
            setSearchTelco(telcoList);
        }
    };

    tailwindStyle = getStyle(theme);
    //Access to all props that introduced in element.
    return (
        <View style={[{ flex: 1 }, tailwindStyle]}>
            <View style={styles.searchInput}>
                <SearchInput
                    doSearchToogle={doSearchToogle}
                    showSearchInput={showSearchInput}
                    onSearchTextChange={onSearchTextChange}
                />
            </View>
            {searchTelco.length > 0 ? (
                <FlatList
                    data={searchTelco}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.seperator} />}
                    keyExtractor={(item, index) => `${index}`}
                />
            ) : (
                <View style={styles.container}>
                    <View style={styles.emptyStateView}>
                        <Text
                            fontSize={18}
                            lineHeight={32}
                            fontWeight="bold"
                            textAlign="left"
                            text={EMPTY_HEADER}
                            style={styles.headerText}
                        />
                        <Text
                            fontSize={14}
                            lineHeight={20}
                            text={EMPTY_SUBHEADER}
                            style={styles.subHeaderText}
                        />
                    </View>
                </View>
            )}

            <Error {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        marginHorizontal: 24,
    },
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
        flexDirection: "row",
        height: 90,
        marginHorizontal: 24,
    },
    seperator: {
        backgroundColor: SEPARATOR_GRAY,
        flex: 1,
        height: 1,
        marginHorizontal: 24,
    },
    title: {
        marginLeft: 18,
    },
});

export default ListReloadTelco;
