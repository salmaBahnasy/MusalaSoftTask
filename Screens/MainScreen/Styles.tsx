import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    header: {
        ...FONTS?.h1,
        marginVertical: SIZES?.padding2
    },
    MainView:{
        height: SIZES?.height,
        paddingBottom: 50,
        // width:'90%',
        // alignSelf:'center'
    },
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
    newsTitle: {
        ...FONTS?.h3,
        marginBottom: SIZES?.base,
        textTransform: 'uppercase',
        color:COLORS?.black
    },
    newsImage: {
        width: '100%',
        height: 120,
        borderRadius: 10
    }
});

export default styles;