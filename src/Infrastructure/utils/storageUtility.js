import AsyncStorage from '@react-native-async-storage/async-storage';
let jwt_decode = require('jwt-decode');
export const setLogin = async value => {
  console.log('loggin in store func = ', value);
  try {
    await AsyncStorage.setItem('@isLoggedIn', JSON.stringify(value));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getLogin = async () => {
  try {
    const value = await AsyncStorage.getItem('@isLoggedIn');
    console.log('get async login = ', value);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setAuthToken = async value => {
  console.log('token in store func = ', value);
  try {
    await AsyncStorage.setItem('@authToken', JSON.stringify(value));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@authToken');
    console.log('get async getAuthToken = ', value);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};
export const setUserInfo = async value => {
  console.log('UserInfo asyncStore = ', value);
  try {
    await AsyncStorage.setItem('@UserInfo', JSON.stringify(value));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem('@UserInfo');
    console.log('get UserInfo asyncstore = ', value);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setAuthTokenExpiry = async value => {
  const {exp} = await jwt_decode(value);
  console.log('exp--', exp);
  try {
    await AsyncStorage.setItem('@authTokenExpiry', JSON.stringify(exp));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};
export const getAuthTokenExpiry = async () => {
  try {
    const value = await AsyncStorage.getItem('@authTokenExpiry');
    console.log('get async getAuthTokenExpiry = ', value);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setUserFName = async value => {
  // const {exp} = await jwt_decode(value);
  console.log('value--', value);
  try {
    await AsyncStorage.setItem('@firstName', value);
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getUserFName = async () => {
  try {
    const value = await AsyncStorage.getItem('@firstName');
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setUserLName = async value => {
  // const {exp} = await jwt_decode(value);
  console.log('value--', value);
  try {
    await AsyncStorage.setItem('@lastName', value);
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getUserLName = async () => {
  try {
    const value = await AsyncStorage.getItem('@lastName');
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setUserEmail = async value => {
  // const {exp} = await jwt_decode(value);
  console.log('asyc email value--', value);
  try {
    await AsyncStorage.setItem('@userEmail', value);
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getUserEmail = async () => {
  try {
    const value = await AsyncStorage.getItem('@userEmail');
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setUserID = async value => {
  try {
    await AsyncStorage.setItem('@userID', JSON.stringify(value));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getUserID = async () => {
  try {
    const value = await AsyncStorage.getItem('@userID');
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};

export const setLoginID = async value => {
  try {
    await AsyncStorage.setItem('@loginID', value);
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getLoginID = async () => {
  try {
    const value = await AsyncStorage.getItem('@loginID');
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};
export const setOrgId = async value => {
  try {
    await AsyncStorage.setItem('@OrgID', JSON.stringify(value));
  } catch (e) {
    console.log('saving error: ', e);
    // saving error
  }
};

export const getOrgId = async () => {
  try {
    const value = await AsyncStorage.getItem('@OrgID');
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('retrive error: ', e);
  }
};
