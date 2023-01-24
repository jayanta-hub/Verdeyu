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
  LabelText: {
    fontSize: scale(10),
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
    fontSize: scale(16),
    fontFamily: 'Montserrat-SemiBold',
    color: colors.VeryDark,
    paddingLeft: scale(-2),
    borderBottomWidth: scale(1),
    borderColor: colors.LightGrayishBlue,
    padding: 0,
  },
  placeholder: {
    height: scale(30),
    fontSize: scale(14),
    fontFamily: 'Montserrat-Medium',
    paddingLeft: scale(-2),
    borderBottomWidth: scale(1),
    borderColor: colors.LightGrayishBlue,
    padding: 0,
  },
  errorMessage: {
    marginTop: scale(5),
    fontSize: scale(10),
    fontFamily: 'Montserrat-Medium',
    color: 'red',
  },
  inputWrapper: {
    flexDirection: 'column',
    marginTop: scale(15),
  },
  dropdown: {
    marginTop: scale(5),
    minHeight: scale(35),
    width: scale(100),
    borderRadius: scale(5),
    borderColor: '#C3D0DE',
    paddingVertical: -20,
  },
  radioTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: scale(14),
    color: '#4A4A4A',
  },
});

export default styles;
