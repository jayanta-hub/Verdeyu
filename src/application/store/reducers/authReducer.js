import {LOGIN, FAIL, SUCCESS, COUNYTRYLIST} from '../action-types';

const initialState = {
  isUserValid: false,
  isAuthenticating: false,
  error: {},
  userInfo: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, isAuthenticating: true};
    case `${LOGIN}_${SUCCESS}`:
      return {...state, isUserValid: true, userInfo: {...payload}};
    case `${LOGIN}_${FAIL}`:
      return {
        ...state,
        isAuthenticating: false,
        isUserValid: false,
        error: {...payload},
      };
    case COUNYTRYLIST:
      return {...state, isAuthenticating: true};
    case `${COUNYTRYLIST}_${SUCCESS}`:
      return {...state, isUserValid: true, CountryList: {...payload}};
    case `${COUNYTRYLIST}_${FAIL}`:
      return {
        ...state,
        isAuthenticating: false,
        isUserValid: false,
        error: {...payload},
      };

    default:
      return state;
  }
};
