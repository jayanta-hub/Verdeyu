import {HOME, FAIL, SUCCESS, SIGNUP, LOGIN} from '../action-types';
import Toast from 'react-native-simple-toast';

export const logIn = payloadData => dispatch =>
  dispatch({
    type: LOGIN,
    payload: {
      request: {
        url: 'api/v1/yutools/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: payloadData,
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status !== 500) {
            dispatch({
              type: `${LOGIN}_${SUCCESS}`,
              payload: {...data, ...payloadData},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${LOGIN}_${FAIL}`,
            payload: {...data},
          });
          return Promise.reject(data);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${LOGIN}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${LOGIN}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });

export const signUp = payloadData => dispatch =>
  dispatch({
    type: SIGNUP,
    payload: {
      request: {
        url: 'api/v1/users/register',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: payloadData,
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status) {
            dispatch({
              type: `${SIGNUP}_${SUCCESS}`,
              payload: {...data, ...payloadData},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${SIGNUP}_${FAIL}`,
            payload: {...error},
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${SIGNUP}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${SIGNUP}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });
