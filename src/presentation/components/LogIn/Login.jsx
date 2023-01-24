import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../Infrastructure/assets/colors/colors';
import styles from './styles';
import Logo from '../../../Infrastructure/assets/images/logo.svg';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import {
  CustomButton,
  CustomInput,
} from '../../../Infrastructure/component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import {ToastMessage} from '../../../Infrastructure/component/ToastMessage/ToastMessage';
import * as yup from 'yup';
import {logIn} from '../../../application/store/actions/auth';
import {
  setAuthToken,
  setAuthTokenExpiry,
  setLoginID,
  setOrgId,
  setUserID,
} from '../../../Infrastructure/utils/storageUtility';
import {AuthContext} from '../../../Infrastructure/utils/context';
const loginValidationSchema = yup.object().shape({
  userID: yup
    .string()
    .email('Invalid Email')
    .required('User Name / ID Required'),
  password: yup.string().required('Password Required'),
});
const Login = props => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  const {signIn} = React.useContext(AuthContext);
  const formSubmitHandler = async () => {
    const payload = {
      password: values.password,
      username: values.userID,
    };
    await props
      .authLogIn(payload)
      .then(async res => {
        console.log('login res ==>>>', res);
        await setLoginID(res.data.username);
        await setOrgId(res.data.orgId);
        await setAuthToken(res.data.token);
        await setUserID(res.data.userId);
        await signIn();
        await setAuthTokenExpiry(res.data.token);
        ToastMessage(res.message.message);
      })
      .catch(err => {
        console.log('error', err);
        ToastMessage(err.errors[0].message);
      });
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: {userID: '', password: ''},
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => formSubmitHandler(values),
    validationSchema: loginValidationSchema,
  });
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View style={styles.svgWrapper}>
                <Logo width="100%" height="100%" />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: scale(70),
                marginHorizontal: scale(20),
              }}>
              <Text style={styles.TitleText}>Welcome!</Text>
              <Text style={{...styles.SubTitleText, marginTop: scale(10)}}>
                Sign in to continue
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: scale(30),
                }}>
                <Text style={styles.SubTitleText}>Email</Text>
                <CustomInput
                  name="email"
                  style={styles.InputStyle}
                  value={values.userID}
                  onBlur={handleBlur('userID')}
                  onChangeText={handleChange('userID')}
                />
                {touched.userID && errors.userID && (
                  <Text style={styles.errorMessage}>{errors.userID}</Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: scale(30),
                }}>
                <Text style={styles.SubTitleText}>Password</Text>
                <CustomInput
                  name="password"
                  style={styles.InputStyle}
                  secureTextEntry={true}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(30),
                }}>
                <CustomButton
                  buttonText="SIGN IN"
                  buttonStyle={styles.buttonWrapper}
                  buttonTextStyle={styles.buttonText}
                  onPressHandler={handleSubmit}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(15),
                }}>
                <Text
                  style={{
                    ...styles.FooterText,
                    color: colors.BrightRed,
                    textDecorationLine: 'underline',
                  }}>
                  Forgot Password?
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(20),
                }}>
                <Text style={styles.FooterText}>
                  Don’t have an account?{' '}
                  <Text
                    style={{
                      ...styles.FooterText,
                      color: colors.BrightRed,
                      textDecorationLine: 'underline',
                    }}>
                    Register
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
const mapDispatchToProps = {
  authLogIn: payloadData => logIn(payloadData),
};
export default connect(null, mapDispatchToProps)(Login);
