import {
    YELLOW,
    WHITE,
    LIGHT_GREY,
    DARK_GREY,
    BLUE,
    BLACK,
    PICTON_BLUE,
} from "../../constants/colors";

const themes = [
    [`mbbTextWhite`, { color: WHITE }],
    [`mbbTextWhite50`, { color: `${WHITE}50` }],
    [`mbbTextDarkGrey`, { color: DARK_GREY }],
    [`mbbTextSemiBold`, { fontWeight: "600" }],
    [`mbbTextBold`, { fontWeight: "700" }],
    [`mbbFont12`, { fontSize: 12, lineHeight: 16 }],
    [`mbbFont14`, { fontSize: 14, lineHeight: 18 }],
    [`mbbFont16`, { fontSize: 16, lineHeight: 20 }],
    [`mbbFont18`, { fontSize: 18, lineHeight: 22 }],
    [`mbbFont20`, { fontSize: 20, lineHeight: 24 }],
    [`mbbFont24`, { fontSize: 24, lineHeight: 28 }],
    [`mbbHeaderTitle`, { fontSize: "16px", fontWeight: '600', lineHeight:"19.5px", textAlign: "center"}],
    [`mbbSSLImageBg`, { height: "20%", position: "absolute", zIndex:-1, width: "100%" }],
    [
        `mbbSSLTitleViewAll`,
        {
            display: 'flex',
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            "padding-left": "24px",
            "padding-right": "24px",
            "padding-bottom": "20px",
            height:"20px"
        },
    ],
    [
        `mbbSSLTitleText`,
        {
            fontSize: 16,
            lineHeight: 19,
            fontWeight: `600`,
            letterSpacing: 0,
            color: BLACK,
        },
    ],
    [
        `mbbSSLViewAllText`,
        {
            fontSize: 14,
            lineHeight: 19,
            fontStyle: "normal",
            fontWeight: "600",
            letterSpacing: 0,
            color: PICTON_BLUE,
        },
    ],
    [`mbbFontFamily`, { fontFamily: "Montserrat" }],
    [`mbbFontFamilyLight`, { fontFamily: "Montserrat-Light" }],
    [`mbbHR`, { backgroundColor: YELLOW, height: 2, alignSelf: "stretch" }],
    [`mbbBGColorLightGrey`, { backgroundColor: LIGHT_GREY }],
    [`mbbBGColorDarkGrey`, { backgroundColor: DARK_GREY }],
    [`mbbBGColorWhite`, { backgroundColor: WHITE }],
    [
        `mbbImageAbsoluteCenter`,
        {
            position: "absolute",
            top: 20,
            left: 115,
            borderRadius: 1000,
            borderColor: BLUE,
            borderWidth: 2,
        },
    ],
    [
        `mbbImageRounded`,
        {
            width: 130,
            height: 130,
            borderRadius: 65,
            alignSelf: "center",
            resizeMode: "contain",
        },
    ],
];

export default themes;
