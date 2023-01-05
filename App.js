import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashComponent from './src/Infrastructure/component/SplashScreen/SplashScreen';
import {Provider} from 'react-redux';
import store from './src/application/store/index';
import AuthNavigator from './src/Infrastructure/navigation/AuthNavigator';
const App = () => {
  const [spalshTime, setSplashTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashTime(false);
    }, 2000);
  }, []);

  if (spalshTime) {
    return (
      <NavigationContainer>
        <SplashComponent />
      </NavigationContainer>
    );
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
