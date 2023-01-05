import {StyleSheet, Dimensions} from 'react-native';
import {scale, width} from '../../../Infrastructure/utils/screenUtility';
import colors from '../../../Infrastructure/assets/colors/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainWhite,
  },
  FooterText: {
    fontSize: scale(14),
    color: colors.VeryDark,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'justify',
  },
  svgWrapper: {
    flex: 1,
    maxHeight: scale(114),
    maxWidth: scale(114),
  },
  TitleText: {
    fontSize: scale(24),
    color: colors.VeryDark,
    fontFamily: 'Montserrat-Bold',
  },
  SubTitleText: {
    fontSize: scale(12),
    color: colors.VeryDarkGray,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'justify',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(14),
    fontFamily: 'Montserrat-Bold',
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    height: scale(42),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.VeryDarkBlue,
  },
  InputStyle: {
    height: scale(30),
    color: colors.VeryDark,
    paddingLeft: scale(-2),
    borderBottomWidth: scale(1),
    borderColor: colors.LightGrayishBlue,
    padding: 0,
  },
});

export default styles;
