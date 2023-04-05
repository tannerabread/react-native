/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, DataStore} from 'aws-amplify';
import {Todo} from './models';
import 'core-js/full/symbol/async-iterator';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

async function saveDatastoreTodo() {
  try {
    const post = await DataStore.save(
      new Todo({
        name: 'Datastore',
        description: 'cli datastore!',
      }),
    );
    console.log('post: ', JSON.stringify(post, null, 2));
  } catch (error) {
    console.log(error);
  }
}
saveDatastoreTodo();

async function readDatastore() {
  try {
    const todos = await DataStore.query(Todo);
    console.log('todos: ', JSON.stringify(todos, null, 2));
  } catch (error) {
    console.log(error);
  }
}
readDatastore();

AppRegistry.registerComponent(appName, () => App);
