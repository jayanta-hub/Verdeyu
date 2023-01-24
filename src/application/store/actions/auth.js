import {
  HOME,
  FAIL,
  SUCCESS,
  SIGNUP,
  LOGIN,
  COUNYTRYLIST,
  TITELIST,
  POSTREG,
  POSTOTP,
} from '../action-types';
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
export const getcontryList = () => dispatch =>
  dispatch({
    type: COUNYTRYLIST,
    payload: {
      request: {
        url: 'api/v1/yutools/countries',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status) {
            dispatch({
              type: `${COUNYTRYLIST}_${SUCCESS}`,
              payload: {...data.data},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${COUNYTRYLIST}_${FAIL}`,
            payload: {...error},
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${COUNYTRYLIST}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${COUNYTRYLIST}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });
export const getTitleList = groupCode => dispatch =>
  dispatch({
    type: TITELIST,
    payload: {
      request: {
        url: `api/v1/yutools/referenceLibrary?groupCode=${groupCode}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status) {
            dispatch({
              type: `${TITELIST}_${SUCCESS}`,
              payload: {...data.data},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${TITELIST}_${FAIL}`,
            payload: {...error},
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${TITELIST}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${TITELIST}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });
export const postregister = payload => dispatch =>
  dispatch({
    type: POSTREG,
    payload: {
      request: {
        url: `api/v1/yutools/register`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload,
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status) {
            dispatch({
              type: `${POSTREG}_${SUCCESS}`,
              payload: {...data.data},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${POSTREG}_${FAIL}`,
            payload: {...error},
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${POSTREG}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${POSTREG}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });
export const verifyOtpAction = payload => dispatch =>
  dispatch({
    type: POSTOTP,
    payload: {
      request: {
        url: `api/v1/yutools/verify?username=${payload.username}&validationToken=${payload.validationToken}&isInvite=${payload.isInvite}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      options: {
        onSuccess({response}) {
          const {data, error} = response;
          if (data.status) {
            dispatch({
              type: `${POSTOTP}_${SUCCESS}`,
              payload: {...data.data},
            });

            return Promise.resolve({...data});
          }
          dispatch({
            type: `${POSTOTP}_${FAIL}`,
            payload: {...error},
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: {data: dataError},
            } = exception.error;
            dispatch({type: `${POSTOTP}_${FAIL}`, payload: {dataError}});
            return Promise.reject(dataError);
          }
          dispatch({type: `${POSTOTP}_${FAIL}`, payload: {}});
          return Promise.reject();
        },
      },
    },
  });
