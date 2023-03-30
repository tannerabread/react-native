/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Cache} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

Cache.setItem('testKey', 'testValue');
Cache.getItem('testKey').then(value => {
  console.log({value});
});

AppRegistry.registerComponent(appName, () => App);
