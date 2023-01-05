import {StyleSheet, Dimensions} from 'react-native';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import colors from '../../../Infrastructure/assets/colors/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainWhite,
  },
  svgWrapper: {
    maxHeight: scale(350),
    backgroundColor: colors.mainWhite,
    justifyContent: 'center',
  },
  svg: {
    marginTop: scale(-10),
  },
  TitleText: {
    fontSize: scale(32),
    color: colors.VeryDark,
    fontFamily: 'Montserrat-Bold',
  },
  FooterText: {
    fontSize: scale(14),
    color: colors.VeryDark,
    fontFamily: 'Montserrat-Medium',
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
});

export default styles;
