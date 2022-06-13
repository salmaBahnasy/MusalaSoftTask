import React from "react";
import {
    Text, StyleSheet, View, Image
} from 'react-native';
import { FONTS, SIZES } from "../../constants";

export type Props = {
    imgstyle?: object;
    img: object;
    txtstyle?: object;
    title?: string
};

const EmptyView: React.FC<Props> = ({ imgstyle, img, txtstyle, title }) => {


    return (
        <View style={{
            ...styles?.container
        }}>
            <Image
                style={{
                    ...styles?.img,
                    ...imgstyle,
                }}
                source={img}
            />
            <Text style={{
                ...styles?.txt,
                ...txtstyle
            }}>
                {title}
            </Text>
        </View>
    )

}

export default EmptyView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: SIZES?.padding
    },
    img: {
        width: '50%',
        height: SIZES.height / 4,
        alignSelf: 'center'
    },
    txt: {
        ...FONTS?.h4,
        marginTop: SIZES.padding,


    }
})