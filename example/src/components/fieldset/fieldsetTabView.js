import React, { useState, useRef } from "react";
// import { View, StyleSheet, Dimensions, TouchableOpacity, Animated } from "react-native";
// import { TabView } from "react-native-tab-view";
import { Tabs, Swiper } from 'antd-mobile'
// import Text from "@components/Text";

import { getStyle } from "../tailwind";

// const initialLayout = { width: Dimensions.get("window").width };

const FieldsetTabView = (props) => {
    const swiperRef = useRef(null)
    const [activeIndex, setIndex] = useState(0);
    //Access to main props
    //Injected at runtime
    const { item, child } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;
    const routes = 
        child?.map((i) => {
            return { key: i.props.item.label, title: i.props.item.label };
        })

    const { label = "", theme = "", options } = item;

    
    

    // function renderTabBar(props) {
    //     function onPress(index) {
    //         setIndex(index);
    //     }
    //     const inputRange = props.navigationState.routes.map((x, i) => i);
    //     console.log(inputRange, props);

    //     return (
    //         <View style={[styles.tabBarView, getStyle(theme)]}>
    //             {props.navigationState.routes.map((route, i) => {
    //                 const opacity = props.position.interpolate({
    //                     inputRange,
    //                     outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 1.5)),
    //                 });
    //                 const height = props.position.interpolate({
    //                     inputRange,
    //                     outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0)),
    //                 });
    //                 const isFocused = index === i;
    //                 function handlePress() {
    //                     onPress(i);
    //                 }
    //                 return (
    //                     <TouchableOpacity
    //                         style={styles.tabBarTouchable}
    //                         onPress={handlePress}
    //                         key={`${i}`}
    //                     >
    //                         <View style={styles.tabBarTitleContainer}>
    //                             <Text
    //                                 fontSize={14}
    //                                 lineHeight={23}
    //                                 fontWeight={isFocused ? "600" : "300"}
    //                                 color={BLACK}
    //                                 textAlign="center"
    //                                 text={route.title}
    //                             />
    //                             {/* {i === 1 && hasSslOngoingOrders && (
    //                                 <View style={styles.redDotContainer}>
    //                                     <View style={styles.redDot} />
    //                                 </View>
    //                             )} */}
    //                         </View>
    //                         <Animated.View
    //                             useNativeDriver={false}
    //                             style={[
    //                                 styles.bottomBar,
    //                                 { opacity },
    //                                 {
    //                                     transform: [
    //                                         {
    //                                             scaleY: height,
    //                                         },
    //                                     ],
    //                                 },
    //                             ]}
    //                         />
    //                     </TouchableOpacity>
    //                 );
    //             })}
    //         </View>
    //     );
    // }

    function renderScene(props) {
        return child?.find((i) => i.props?.item?.label == props?.route?.key) ?? null;
    }

    //Access to all props that introduced in element.
    return <div style={getStyle(theme)}>
        <Tabs
        className='navigationTabs'
        activeKey={routes[activeIndex].key}
        onChange={(key) => {
            const selectedIndex = routes.findIndex((item) => item.key === key);
            setIndex(selectedIndex)
            console.log("123", swiperRef.current)
            // swiperRef.current?.swipeTo(selectedIndex)
        }}
      >
        {routes.map((item) => (
          <Tabs.Tab key={item.key} title={item.title} />
        ))}
      </Tabs>
      <Swiper
        direction='horizontal'
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
            setIndex(index)
        }}
      >
        {child.map((item) => {
            console.log("itemitem",item )
        return (
          <Swiper.Item>
            <div style={{height:"100vh",display:"flex",fontSize:"15px",backgroundColor:"white"}}>
                {child?.find((i) => i.props?.item?.label == item.props?.item?.label)}
            </div>
          </Swiper.Item>
        )})}
      </Swiper>
    </div>
    // return (
    //     <TabView
    //         lazy
    //         navigationState={{ index, routes }}
    //         renderScene={renderScene}
    //         onIndexChange={setIndex}
    //         initialLayout={initialLayout}
    //         renderTabBar={renderTabBar}
    //     />
    // );
};

// const styles = StyleSheet.create({
//     bottomBar: {
//         backgroundColor: BLACK,
//         height: 4,
//     },
//     headerCloseButtonContainer: {
//         alignItems: "center",
//         height: 45,
//         justifyContent: "center",
//         width: 45,
//     },
//     headerImage: { height: "20%", position: "absolute", width: "100%" },
//     loaderContainer: {
//         backgroundColor: MEDIUM_GREY,
//         flex: 1,
//     },
//     redDot: {
//         backgroundColor: RED,
//         borderRadius: 4,
//         height: 8,
//         marginLeft: 4,
//         width: 8,
//     },
//     redDotContainer: {
//         justifyContent: "center",
//     },
//     searchIcon: {
//         height: 45,
//         marginLeft: -8,
//         width: 45,
//     },
//     tabBarTitleContainer: {
//         flexDirection: "row",
//     },
//     tabBarTouchable: {
//         flexDirection: "column",
//         paddingBottom: 4,
//     },
//     tabBarView: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 16,
//     },
// });

export default FieldsetTabView;
