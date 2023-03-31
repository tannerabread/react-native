/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, DataStore, Predicates} from 'aws-amplify';
import {Todo} from './models';
import 'core-js/full/symbol/async-iterator';
import config from './aws-exports';
Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: 'MULTI_AUTH',
  },
});
Amplify.Logger.LOG_LEVEL = 'DEBUG';

// DataStore.delete(Todo, Predicates.ALL);

async function saveDatastoreTodo() {
  try {
    const post = await DataStore.save(
      new Todo({
        name: 'Datastore',
        description: 'cli datastore!',
      }),
    );
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
