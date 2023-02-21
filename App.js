import {View} from 'react-native';
import React from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
