import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput from 'react-native-phone-input';
import {connect} from 'react-redux';
import {
  getcontryList,
  getTitleList,
  postregister,
} from '../../../application/store/actions/auth';
import {ToastMessage} from '../../../Infrastructure/component/ToastMessage/ToastMessage';
const loginValidationSchema = yup.object().shape({
  title: yup.string().required('Title Required').nullable(),
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
    .min(3, 'Organization Name Should have minimum 3 character.')
    .required('Business/Organization Name Required'),
  phoneNumber: yup
    .string()
    .max(10, 'Please enter 10 digit mobile number.')
    .required('Enter Phone Number'),
  countryName: yup.string().required('Select Country'),
  gender: yup.string().required('Gender Required'),
});
const Register = props => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState(null);
  const [items, setItems] = useState([]);
  const [titleList, setTiteList] = useState([]);
  const [countryItem, setCountryItem] = useState([]);
  const [genderList, setGenderList] = useState([]);
  const phoneInput = useRef(null);
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
      phoneNumber: '',
      countryName: '',
      gender: '',
      title: '',
    },
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => formSubmitHandler(values),
    validationSchema: loginValidationSchema,
  });
  const formSubmitHandler = async () => {
    const countryCode = countryItem.filter(
      item => item.shortCountryCode === values.countryName.toUpperCase(),
    );
    const genderCode = genderList.filter(item => item.label === values.gender);
    const titleCode = titleList.filter(item => item.refCode === values.title);
    const payload = {
      titleRefId: titleCode[0].id,
      fullName: values.fullName,
      username: values.userName,
      password: values.password,
      rePassword: values.confirmPassword,
      orgName: values.organizationName,
      phoneCode: countryCode[0].countryCode,
      phoneNumber: values.phoneNumber,
      genderRefId: genderCode[0].value,
    };
    console.log(
      '🚀 ~ file: Register.jsx:105 ~ formSubmitHandler ~ payload',
      payload,
    );

    await props
      .userRegister(payload)
      .then(async res => {
        console.log('userRegister res ==>>>', res);
        // setStatus(false);
        ToastMessage(res.message.message);
        navigation.navigate('Otp', {userData: res.data});
      })
      .catch(async err => {
        console.log('error', err);
        // setStatus(false);
        ToastMessage(err.errors[0].message);
      });
  };
  const init = () => {
    props
      .contryList()
      .then(res => {
        // console.log('contryList res ==>>>', res);
        setCountryItem(res.data);
      })
      .catch(err => {
        console.log('error', err);
        ToastMessage(err.errors[0].message);
      });
    props
      .TitleList('title')
      .then(res => {
        // console.log('TitleList res ==>>>', res);
        res.data.map(item => {
          items.push({
            label: item.refCodeDesc,
            value: item.refCode,
          });
        });
        setTiteList(res.data);
      })

      .catch(err => {
        console.log('error', err);
        ToastMessage(err.errors[0].message);
      });
    props
      .TitleList('gender')
      .then(res => {
        console.log('gender res ==>>>', res);
        let Genderdata = res.data.map(item => {
          return {
            label: item.refCodeDesc,
            value: item.id,
          };
        });
        setGenderList(Genderdata);
      })
      .catch(err => {
        console.log('error', err);
        ToastMessage(err.errors[0].message);
      });
  };
  useEffect(() => {
    init();
  }, []);

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
                  flexDirection: 'row',
                  flex: 1,
                  zIndex: 100,
                  alignItems: 'center',
                  marginTop: scale(30),
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.LabelText}>Title</Text>
                  </View>
                  <View>
                    <DropDownPicker
                      listMode="SCROLLVIEW"
                      open={open}
                      value={titleValue}
                      items={items}
                      setOpen={setOpen}
                      setValue={setTitleValue}
                      setItems={setItems}
                      onChangeValue={handleChange('title')}
                      placeholder="Select"
                      placeholderStyle={{
                        color: '#4D4F5C',
                      }}
                      style={styles.dropdown}
                    />
                    {touched.title && errors.title && (
                      <Text style={styles.errorMessage}>{errors.title}</Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',

                    marginLeft: scale(10),
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
              <View>
                <View style={{flexDirection: 'row', marginTop: scale(10)}}>
                  <Text style={styles.LabelText}>Phone No.</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    height: scale(37),
                    marginTop: scale(5),
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        flex: 1,
                        height: scale(30),
                        borderWidth: 1,
                        borderColor: '#CCD5E6',
                        borderRadius: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: scale(5),
                      }}>
                      <PhoneInput
                        name="phoneNumber"
                        ref={phoneInput}
                        initialCountry={''}
                        keyboardType="numeric"
                        layout="first"
                        withShadow
                        autoFocus
                        pickerBackgroundColor="#A2D3EA"
                        onSelectCountry={handleChange('countryName')}
                      />
                    </View>
                    <View style={{flex: 8, marginLeft: scale(10)}}>
                      <CustomInput
                        name="phoneNumber"
                        style={styles.InputStyle}
                        value={values.phoneNumber}
                        onBlur={handleBlur('phoneNumber')}
                        onChangeText={handleChange('phoneNumber')}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {touched.countryName && errors.countryName && (
                      <Text style={styles.errorMessage}>
                        {errors.countryName}
                      </Text>
                    )}
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.errorMessage}>
                        {errors.phoneNumber}
                      </Text>
                    )}
                  </View>
                </View>
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
              <View style={{marginTop: scale(10)}}>
                <View>
                  <Text style={styles.LabelText}>Gender</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                  <RadioButton.Group
                    onValueChange={handleChange('gender')}
                    value={values.gender}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {genderList?.map(gender => {
                        return (
                          <View
                            key={gender.label}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <RadioButton.Android
                              value={gender.label}
                              uncheckedColor="grey"
                              color="#0089CF"
                              label={gender.label}
                            />
                            <Text style={styles.radioTitle}>
                              {gender.label}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </RadioButton.Group>
                  {touched.gender && errors.gender && (
                    <Text
                      style={{...styles.errorMessage, marginLeft: scale(5)}}>
                      {errors.gender}
                    </Text>
                  )}
                </View>
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
const mapDispatchToProps = {
  contryList: () => getcontryList(),
  TitleList: groupCode => getTitleList(groupCode),
  userRegister: payload => postregister(payload),
};
export default connect(null, mapDispatchToProps)(Register);
