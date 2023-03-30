/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import {PushNotification} from '@aws-amplify/pushnotification';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

PushNotification.onRegister(token => {
  console.log('in app registration', token);
});

PushNotification.onNotificationOpened(notification => {
  console.log('the notification is opened', notification);
});

AppRegistry.registerComponent(appName, () => App);
