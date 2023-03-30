/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, Storage} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

async function putFile() {
  const result = await Storage.put('test.txt', 'Hello');
  console.log(result);
}
putFile();

Storage.list('') // for listing ALL files without prefix, pass '' instead
  .then(({results}) => console.log(results))
  .catch(err => console.log(err));

AppRegistry.registerComponent(appName, () => App);
