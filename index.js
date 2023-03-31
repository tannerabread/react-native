/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import {API, GRAPHQL_AUTH_MODE} from '@aws-amplify/api';
import {createTodo} from './graphql/mutations';
import {listTodos} from './graphql/queries';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

async function getListTodos() {
  const todo = {name: 'New todo', description: 'testing from graphql'};
  try {
    await API.graphql({
      query: createTodo,
      variables: {input: todo},
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    console.log('todo created!');
  } catch (err) {
    console.error(err);
  }

  try {
    const todos = await API.graphql({
      query: listTodos,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    console.log(todos.data.listTodos.items);
  } catch (err) {
    console.error(err);
  }
}
getListTodos();

AppRegistry.registerComponent(appName, () => App);
