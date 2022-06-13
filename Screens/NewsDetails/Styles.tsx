import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    header: {
        ...FONTS?.h1,
        marginVertical: SIZES?.padding2
    },
    container: {
        height: SIZES.height,
    },
    row_between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES?.padding2
    },
    newsImageDetails:{
        width: '100%',
        alignSelf: 'center',
        height: SIZES.height / 3,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES?.radius
    },
    bgtxt:{
        backgroundColor: COLORS?.ornage,
        padding: SIZES.base,
        color: COLORS.white,
        borderRadius: SIZES?.radius,
        ...FONTS?.body4,


      },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 40,
        backgroundColor: '#eee',
        paddingHorizontal: SIZES?.padding
    },
    smallIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS?.gray
    },
    newsTitle: {
        ...FONTS?.h3,
        marginBottom: SIZES?.base,
        textTransform: 'uppercase'
    },
    newsImage: {
        width: '100%',
        height: 120,
        borderRadius: 10
    }
});

export default styles;