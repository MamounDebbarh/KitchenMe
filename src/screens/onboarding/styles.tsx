//style sheet
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,   
        alignItems: 'center',
        padding: SIZES.padding,
        paddingTop: SIZES.padding * 2,
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding,
    },
    footer: {
        flex: 3,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
    },
    title: {
        color: COLORS.primary,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
    },
    text: {
        fontSize: SIZES.h4,
        paddingTop: SIZES.padding,
        textAlign: 'center',
        color: COLORS.primary, 
    },
    button: {
        padding: SIZES.padding,
    },
    buttonText: {
        color: COLORS.primary, 
        fontSize: SIZES.h4,
        fontWeight: 'bold',
            
    },
    image: {
        width: SIZES.width - 40,
        resizeMode: 'contain',
        borderRadius: SIZES.radius,
        maxHeight: SIZES.height / 2,
    },
});
