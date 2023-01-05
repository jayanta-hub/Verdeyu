import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Logo from '../../../Infrastructure/assets/images/logo.svg';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import colors from '../../../Infrastructure/assets/colors/colors';
import {
  CustomButton,
  CustomInput,
} from '../../../Infrastructure/component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const CreateAccount = () => {
  const navigation = useNavigation();

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
              <Text style={styles.TitleText}>Create Your Account</Text>
              <Text style={{...styles.SubTitleText, marginTop: scale(10)}}>
                Enter your email that you would like to use for your account.
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: scale(30),
                }}>
                <Text style={styles.SubTitleText}>Email</Text>
                <CustomInput style={styles.InputStyle} />
              </View>

              <View
                style={{
                  flex: 1,
                  marginTop: scale(30),
                }}>
                <Text style={styles.FooterText}>
                  By continuing, you are setting up a Veradeyu account and agree
                  to our{' '}
                  <Text
                    style={{
                      ...styles.FooterText,
                      color: colors.BrightRed,
                      textDecorationLine: 'underline',
                    }}>
                    Privacy Policy{' '}
                    <Text
                      style={{
                        ...styles.FooterText,
                        textDecorationLine: 'none',
                      }}>
                      and
                    </Text>{' '}
                    Terms and Conditions
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(25),
                }}>
                <CustomButton
                  buttonText="NEXT"
                  buttonStyle={styles.buttonWrapper}
                  buttonTextStyle={styles.buttonText}
                  onPressHandler={() => navigation.navigate('CreateAccount')}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(20),
                  flexDirection: 'row',
                }}>
                <Text style={styles.FooterText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      ...styles.FooterText,
                      color: colors.BrightRed,
                      textDecorationLine: 'underline',
                    }}>
                    Sign-In
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

export default CreateAccount;
