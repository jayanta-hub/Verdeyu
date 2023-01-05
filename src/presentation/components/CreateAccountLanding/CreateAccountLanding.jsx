import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LandingImage from '../../../Infrastructure/assets/images/LandingImage.svg';
import styles from './styles';
import {
  width,
  height,
  scale,
} from '../../../Infrastructure/utils/screenUtility';
import {CustomButton} from '../../../Infrastructure/component/CustomButton/CustomButton';
import colors from '../../../Infrastructure/assets/colors/colors';
import {Navigate} from '../../../Infrastructure/commonMethod/commonMethod';
import {useNavigation} from '@react-navigation/native';

const CreateAccountLanding = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <SafeAreaView style={{flexGrow: 1}}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.svgWrapper}>
              <LandingImage style={styles.svg} width="100%" height="100%" />
            </View>
            <View
              style={{
                marginHorizontal: scale(20),
                marginTop: scale(40),
              }}>
              <Text style={styles.TitleText}>
                Make your forms{' '}
                <Text style={{...styles.TitleText, color: colors.BrightRed}}>
                  simple
                </Text>{' '}
                and{' '}
                <Text style={{...styles.TitleText, color: colors.BrightRed}}>
                  sustainable
                </Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(25),
                marginHorizontal: scale(20),
              }}>
              <CustomButton
                buttonText="CREATE ACCOUNT"
                buttonStyle={styles.buttonWrapper}
                buttonTextStyle={styles.buttonText}
                onPressHandler={() => navigation.navigate('Register')}
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
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default CreateAccountLanding;
