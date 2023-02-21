import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Otp from '../Otp';
import Login from '../Login';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName="Otp">
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Otp"
        component={Otp}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
