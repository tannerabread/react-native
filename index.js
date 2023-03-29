/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Analytics} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';
Analytics.updateEndpoint({
  attributes: {
    hobbies: ['hiking', 'reading'],
  },
});

AppRegistry.registerComponent(appName, () => App);
