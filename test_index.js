// @flow
import {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
  BIOMETRY_TYPE,
  canImplyAuthentication,
  getGenericPassword,
  getInternetCredentials,
  getSupportedBiometryType,
  hasInternetCredentials,
  requestSharedWebCredentials,
  resetGenericPassword,
  resetInternetCredentials,
  setGenericPassword,
  setInternetCredentials,
  setSharedWebCredentials,
  type Options,
  type Result,
  type UserCredentials,
  type SharedWebCredentials,
} from 'react-native-keychain';

canImplyAuthentication().then(result => {
  (result: boolean);
});

const simpleOptions2: Options = {
  // $FlowExpectedError - not valid accessible value
  accessible: 'ACCESSIBLE.ALWAYS',
};

const simpleOptions: Options = {
  accessControl: ACCESS_CONTROL.BIOMETRY_ANY,
  accessible: ACCESSIBLE.ALWAYS,
  authenticationType: AUTHENTICATION_TYPE.BIOMETRICS,
  accessGroup: 'accessGroup',
  authenticationPrompt: {
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    cancel: 'cancel',
    confirmationRequired: false,
  },
  service: 'service',
};

canImplyAuthentication(simpleOptions).then(result => {
  (result: boolean);
});

getSupportedBiometryType().then(result => {
  (result: ?string);
});

// $FlowExpectedError - First 3 arguments are required
setInternetCredentials();
setInternetCredentials('server', 'username', 'password');
setInternetCredentials('server', 'username', 'password', simpleOptions).then(
  result => {
    (result: boolean | Result);
  }
);

// $FlowExpectedError - First argument is required
hasInternetCredentials();
hasInternetCredentials('server').then(result => {
  (result: boolean | Result);
});

// $FlowExpectedError - First argument is required
getInternetCredentials();
getInternetCredentials('server', simpleOptions).then(credentials => {
  if (credentials) {
    (credentials.username: string);
    (credentials.password: string);
    (credentials.service: string);
    (credentials.storage: string);
  }
});

// $FlowExpectedError - First argument is required
resetInternetCredentials();
resetInternetCredentials('server').then(result => {
  (result: void);
});

// $FlowExpectedError - First two arguments are required
setGenericPassword();
setGenericPassword('username', 'password').then(result => {
  (result: boolean | Result);
});
setGenericPassword('username', 'password', simpleOptions);
setGenericPassword('username', 'password', 'service');

getGenericPassword().then(result => {
  (result: boolean | SharedWebCredentials);
});
getGenericPassword(simpleOptions);
getGenericPassword({
  authenticationPrompt: 'authenticationPrompt',
});
getGenericPassword('service');

resetGenericPassword().then(result => {
  (result: boolean);
});
resetGenericPassword(simpleOptions);
resetGenericPassword('service');

requestSharedWebCredentials().then(result => {
  if (result) {
    (result.server: string);
    (result.username: string);
    (result.password: string);
    (result.storage: string);
    (result.service: string);
  }
});

setSharedWebCredentials('server', 'username', 'password').then(result => {
  (result: void);
});
