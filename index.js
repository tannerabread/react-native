/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, API, graphqlOperation} from 'aws-amplify';
import {createTodo} from './graphql/mutations';
import {listTodos} from './graphql/queries';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

async function getListTodos() {
  const todo = {name: 'My first todo', description: 'Hello world!'};
  await API.graphql(graphqlOperation(createTodo, {input: todo}));
  const todos = await API.graphql(graphqlOperation(listTodos));
  console.log(todos.data.listTodos.items);
}
getListTodos();

AppRegistry.registerComponent(appName, () => App);
