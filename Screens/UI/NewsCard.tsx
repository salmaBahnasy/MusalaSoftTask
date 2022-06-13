import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';

import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
// ---------------------------------------------------------------
import { COLORS, FONTS, icons, SIZES } from "../../constants";

export type Props = {
    item: object,
    index: Number
};

const NewsCard: React.FC<Props> = ({ item, index }) => {
    const navigation = useNavigation()
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('NewsDetails', {
                    item
                })
            }}
            key={`news-${index}`}
            style={{
                ...styles.card,
                backgroundColor: colors?.card
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: colors?.card
                }}>
                <View
                    style={{
                        flex: 2,
                        paddingRight: SIZES?.padding,
                        backgroundColor: colors?.card

                    }}>
                    <Text
                        style={{
                            ...styles?.newsTitle,
                            color: colors.text
                        }}
                        numberOfLines={2}>
                        {item?.title}
                    </Text>
                    <Text style={{
                        ...FONTS?.body4,
                        color: colors.text

                    }}
                        numberOfLines={4}>
                        {item?.description}
                    </Text>
                </View>
                <View
                    style={{ flex: 1, backgroundColor: colors.card }}
                >
                    <Image
                        // onError={() => { setValid(false) }}
                        source={item?.urlToImage ? { uri: item?.urlToImage } : { uri: item?.image }}
                        style={[{ ...styles?.newsImage }]}
                        defaultSource={icons?.placeholder}
                    />
                </View>
            </View>


        </TouchableOpacity>
    )

}

export default NewsCard;

const styles = StyleSheet.create({
    newsTitle: {
        ...FONTS?.h3,
        marginBottom: SIZES?.base,
        textTransform: 'uppercase',
        color: COLORS?.black
    },
    newsImage: {
        width: '100%',
        height: 120,
        borderRadius: 10
    },
    card: {
        marginVertical: 5,
        padding: SIZES?.padding,
    }
})