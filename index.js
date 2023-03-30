/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Hub} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

Hub.listen('DogsChannel', data => {
  const {payload} = data;
  console.log({payload});
});

Hub.dispatch('DogsChannel', {
  event: 'buttonClick',
  data: {color: 'blue'},
  message: 'testMessage',
});

AppRegistry.registerComponent(appName, () => App);
