import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import styles from './styles';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import Logo from '../../../Infrastructure/assets/images/logo.svg';
import {
  CustomButton,
  CustomInput,
} from '../../../Infrastructure/component/CustomButton/CustomButton';
import colors from '../../../Infrastructure/assets/colors/colors';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
const loginValidationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name Required'),
  userName: yup
    .string()
    .email('Invalid User Name')
    .required('User Name / ID Required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .matches(/\d/, 'Password must have a number')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/[#?!@$%^&*-*/\-\.,]/, 'Password must have a special character')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .matches(/^\S*$/, 'Space is not allowed')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password Required'),
  organizationName: yup
    .string()
    .required('Business/Organization Name Required'),
});
const Register = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);

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
    initialValues: {
      fullName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      organizationName: '',
    },
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => formSubmitHandler(values),
    validationSchema: loginValidationSchema,
  });
  const formSubmitHandler = async () => {
    const payload = {
      fullName: values.fullName,
      userName: values.userName,
      password: values.password,
      rePassword: values.confirmPassword,
      organizationName: values.organizationName,
    };

    // await props
    //   .authLogIn(payload)
    //   .then(async res => {
    //     console.log('login res ==>>>', res);
    //     // setStatus(false);
    //     setTimeout(() => {
    //       ToastMessage(res.message.message);
    //     }, 1);
    //   })
    //   .catch(async err => {
    //     console.log('error', err);
    //     // setStatus(false);

    //     setTimeout(() => {
    //       ToastMessage(err.errors[0].message);
    //     }, 1);
    //   });
  };
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
                marginTop: scale(10),
                marginHorizontal: scale(20),
              }}>
              <Text style={styles.TitleText}>Your Personal Details</Text>
              <Text style={{...styles.SubTitleText, marginTop: scale(10)}}>
                Provide your personal details for the below required fields.
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: scale(30),
                }}>
                <Text style={styles.LabelText}>Full Name</Text>
                <CustomInput
                  name="fullName"
                  style={styles.InputStyle}
                  value={values.fullName}
                  onBlur={handleBlur('fullName')}
                  onChangeText={handleChange('fullName')}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.errorMessage}>{errors.fullName}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.LabelText}>User Name</Text>
                <CustomInput
                  name="userName"
                  style={
                    values.userName !== ''
                      ? styles.InputStyle
                      : styles.placeholder
                  }
                  value={values.userName}
                  onBlur={handleBlur('userName')}
                  onChangeText={handleChange('userName')}
                  placeholder="xxx@x.com"
                  placeholderTextColor={colors.LightGrayishBlue}
                />
                {touched.userName && errors.userName && (
                  <Text style={styles.errorMessage}>{errors.userName}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.LabelText}>Password</Text>
                <CustomInput
                  name="password"
                  style={styles.InputStyle}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.LabelText}>Confirm Password</Text>
                <CustomInput
                  name="confirmPassword"
                  style={styles.InputStyle}
                  value={values.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={true}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorMessage}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.LabelText}>Business/Organization Name</Text>
                <CustomInput
                  name="organizationName"
                  style={styles.InputStyle}
                  value={values.organizationName}
                  onBlur={handleBlur('organizationName')}
                  onChangeText={handleChange('organizationName')}
                />
                {touched.organizationName && errors.organizationName && (
                  <Text style={styles.errorMessage}>
                    {errors.organizationName}
                  </Text>
                )}
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(25),
                }}>
                <CustomButton
                  buttonText="SUBMIT"
                  buttonStyle={styles.buttonWrapper}
                  buttonTextStyle={styles.buttonText}
                  onPressHandler={handleSubmit}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(20),
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      ...styles.FooterText,
                      color: colors.BrightRed,
                      textDecorationLine: 'underline',
                    }}>
                    Skip Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
