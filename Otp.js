import {View} from 'react-native';
import React, {useState} from 'react';
import RnOtpInputs from 'rn-otp-inputs';
import {useNavigation} from '@react-navigation/native';
import Loader from './Loader';

const Otp = () => {
  const [iserror, setIserror] = useState(false);
  const [status, setStatus] = useState(false);
  const navigation = useNavigation();

  const submitHanlder = () => {
    setStatus(true);
    setTimeout(() => {
      setIserror(!iserror);
      setStatus(false);
      iserror ? navigation.navigate('Login') : null;
    }, 2000);
  };
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Loader status={status} />
        <RnOtpInputs
          pinCount={4}
          onSubmit={submitHanlder}
          isError={iserror}
          Minute={0}
          Second={20}
          autoSubmit={true}
          //   mode="flat"
          // secureTextEntry={true}
          // isResendOtpDisplay={false}
          // isButtonDisplay={false}
        />
      </View>
    </>
  );
};

export default Otp;
