import React from "react";
import {
    Text, StyleSheet, View, Image, TouchableOpacity, TextInput
} from 'react-native';
// --------------------------------------------------------------
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import I18n from '../../Localization/i18n';

export type Props = {
    onChangeText: () => object;
   
};
const SearchView: React.FC<Props> = ({ onChangeText }) => {


    return (
        <View
            style={{
                ...styles?.searchRow,

            }}>
            <Image
                source={icons?.search}
                style={{ ...styles?.smallIcon }}
            />
            <TextInput
                style={{ color: '#333', height: 50 }}
                placeholder={I18n.t('Search')}
                onChangeText={(val:string)=>onChangeText(val)}
            />
        </View>
    )

}

export default SearchView;

const styles = StyleSheet.create({
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 40,
        backgroundColor: '#eee',
        paddingHorizontal: SIZES?.padding,
        marginBottom:SIZES.padding
    },
    smallIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS?.gray
    },
})