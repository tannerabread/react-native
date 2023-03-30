/**
 * @format
 */
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Notifications} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

const {InAppMessaging} = Notifications;
InAppMessaging.syncMessages();

AppRegistry.registerComponent(appName, () => App);
