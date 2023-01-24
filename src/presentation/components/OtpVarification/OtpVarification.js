import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {
  verifyOtpAction,
  resendOtpAction,
} from '../../../application/store/actions/auth';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {Button} from 'react-native-paper';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import OtpInput from '../../../Infrastructure/component/OtpInput/OtpInput';
import colors from '../../../Infrastructure/assets/colors/colors';
import Logo from '../../../Infrastructure/assets/images/logo.svg';
import {CustomButton} from '../../../Infrastructure/component/CustomButton/CustomButton';
import {ToastMessage} from '../../../Infrastructure/component/ToastMessage/ToastMessage';

const OtpVarification = props => {
  const [optValue, setOtpValue] = useState(0);
  const navigation = useNavigation();
  console.log('first', props.route?.params);
  const onSubmitHanler = async () => {
    const payload = {
      isInvite: false,
      username: props.route?.params?.userData?.username,
      validationToken: optValue,
    };
    console.log(
      '🚀 ~ file: Register.jsx:105 ~ formSubmitHandler ~ payload',
      payload,
    );

    // await props
    //   .userVerify(payload)
    //   .then(async res => {
    //     console.log('userVerify res ==>>>', res);
    //     ToastMessage(res.message.message);
    //     navigation.navigate('Login');
    //   })
    //   .catch(async err => {
    //     console.log('error', err);
    //     ToastMessage(err.errors[0].message);
    //   });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
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
              marginTop: scale(66),
              marginHorizontal: scale(20),
            }}>
            <Text style={styles.TitleText}>Verify OTP</Text>
            <Text style={{...styles.SubTitleText, marginTop: scale(10)}}>
              A verification code is sent to your{' '}
              <Text
                style={{
                  ...styles.FooterText,
                  color: colors.BrightRed,
                }}>
                {props.route?.params?.userData?.username}
              </Text>{' '}
              Please enter the code here.
            </Text>
            <OtpInput
              pinCount={5}
              bgColor="#EBEAEE"
              mode="flat"
              onSubmit={onSubmitHanler}
              autoSubmit={true}
              onChageValue={setOtpValue}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(30),
              }}>
              <CustomButton
                buttonText="VERIFY & PROCEED"
                buttonStyle={{
                  ...styles.buttonWrapper,
                  opacity: scale(optValue.length !== 5 ? 0.5 : 1),
                }}
                buttonTextStyle={styles.buttonText}
                onPressHandler={onSubmitHanler}
                disabled={optValue.length !== 5 ? true : false}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(20),
              }}>
              <Text style={styles.FooterText}>
                Didn’t receive code?{' '}
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
  );
};

const mapStateToProps = ({authReducer: {authData}}) => ({
  authData,
});

const mapDispatchToProps = {
  userVerify: payload => verifyOtpAction(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpVarification);
