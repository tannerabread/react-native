/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Auth} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

async function signIn() {
  try {
    const user = await Auth.signIn('testuser20', 'testtest');
    console.log({user});
  } catch (error) {
    console.log('error signing in', error);
  }
}
signIn();

async function getUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log({user});
  } catch (error) {
    console.log('error getting user', error);
  }
}
getUser();

AppRegistry.registerComponent(appName, () => App);
