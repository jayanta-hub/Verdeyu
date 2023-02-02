import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashComponent from './src/Infrastructure/component/SplashScreen/SplashScreen';
import {Provider} from 'react-redux';
import store from './src/application/store/index';
import AuthNavigator from './src/Infrastructure/navigation/AuthNavigator';
import DrawerNavigator from './src/Infrastructure/navigation/DrawerNavigator';
import {
  getAuthToken,
  getAuthTokenExpiry,
  setAuthToken,
  setAuthTokenExpiry,
  setLogin,
  setLoginID,
} from './src/Infrastructure/utils/storageUtility';
import {AuthContext} from './src/Infrastructure/utils/context';
import {View, Text} from 'react-native';
// import LikeAndCommentCountMethod from 'reusable/LikeAndCommentCountMethod';
const App = () => {
  const [spalshTime, setSplashTime] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState('');
  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        setIsLoading(true);
        setLogin(true);
      },
      signOut: () => {
        setUserToken(false);
        setIsLoading(false);
        setAuthToken('');
        setLogin(false);
        setAuthTokenExpiry('');
        setLoginID('');
      },
    }),
    [],
  );
  const checkLoginStatus = React.useMemo(async () => {
    const token = await getAuthToken();
    const tokenEx = await getAuthTokenExpiry();
    const expirationTime = tokenEx * 1000 - 60000;
    let currDate = Date.now();
    if (expirationTime < currDate) {
      setUserToken('');
      setIsLoading(false);
      setAuthToken('');
    } else {
      setIsLoading(false);
      setUserToken(token);
    }
  }, []);
  useEffect(() => {
    checkLoginStatus;
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
          <AuthContext.Provider value={authContext}>
            {userToken || isLoading ? <DrawerNavigator /> : <AuthNavigator />}
            <View>
              {/* <Text>{LikeAndCommentCountMethod(101232)}</Text> */}
              <Text>Mobile App Testing</Text>
            </View>
          </AuthContext.Provider>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
