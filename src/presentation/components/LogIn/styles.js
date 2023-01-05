import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../Infrastructure/assets/colors/colors';
import {scale} from '../../../Infrastructure/utils/screenUtility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  FooterText: {
    fontSize: scale(14),
    color: colors.VeryDark,
    fontFamily: 'Montserrat-Medium',
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(14),
    fontFamily: 'Montserrat-Bold',
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    // flex: 1,
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
  errorMessage: {
    fontSize: scale(10),
    fontFamily: 'Montserrat-Medium',
    color: 'red',
  },
});

export default styles;
