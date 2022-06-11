import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#24C16B", // green
    secondary: "#0C381F",   // dark green

    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#666",

    transparent: "transparent",
    ornage: '#FD8469'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55, color: COLORS?.black },
    h1: { fontSize: SIZES.h1, lineHeight: 36, color: COLORS?.black },
    h2: { fontSize: SIZES.h2, lineHeight: 30, color: COLORS?.black },
    h3: { fontSize: SIZES.h3, lineHeight: 22, color: COLORS?.black },
    h4: { fontSize: SIZES.h4, lineHeight: 22, color: COLORS?.black },
    body1: { fontSize: SIZES.body1, lineHeight: 36, color: COLORS?.black },
    body2: { fontSize: SIZES.body2, lineHeight: 30, color: COLORS?.black },
    body3: { fontSize: SIZES.body3, lineHeight: 22, color: COLORS?.black },
    body4: { fontSize: SIZES.body4, lineHeight: 22, color: COLORS?.black },
    body5: { fontSize: SIZES.body5, lineHeight: 22, color: COLORS?.black },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;