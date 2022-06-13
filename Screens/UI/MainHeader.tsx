import React from "react";
import {
    Text, StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
// --------------------------------------------------------------
import { COLORS, FONTS, SIZES } from "../../constants";

export type Props = {
    leftAction: () => object;
    imgstyle?: object;
    txtstyle?: object;
    title?: string
    img: object
};
const MainHeader: React.FC<Props> = ({ leftAction, imgstyle, img, txtstyle, title }) => {


    return (
        <View style={{
            ...styles?.container
        }}>
            <TouchableOpacity
                onPress={() => {
                    leftAction()
                }}
            >
                <Image
                    style={{
                        ...styles?.img,
                        ...imgstyle,
                    }}
                    source={img}
                />
            </TouchableOpacity>
            <Text style={{
                ...styles?.txt,
                ...txtstyle
            }}>
                {title}
            </Text>
        </View>
    )

}

export default MainHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.padding
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: COLORS.darkgray,
    },
    txt: {
        ...FONTS?.h4,


    }
})