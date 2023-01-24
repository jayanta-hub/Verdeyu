import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../presentation/components/LogIn/Login';
import CreateAccountLanding from '../../presentation/components/CreateAccountLanding/CreateAccountLanding';
import Register from '../../presentation/components/Register/Register';
import OtpVarification from '../../presentation/components/OtpVarification/OtpVarification';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator initialRouteName="Login">
      {/* <AuthStack.Screen
        options={{headerShown: false}}
        name="CreateAccountLanding"
        component={CreateAccountLanding}
      /> */}
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Otp"
        component={OtpVarification}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
