// style sheet
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    // alignItems: 'center',
    padding: SIZES.padding,
    paddingTop: SIZES.padding * 2,
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: COLORS.primary,
    marginTop: SIZES.padding,
    textAlign: 'center',
  },
});
