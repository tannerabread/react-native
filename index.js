/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from '@aws-amplify/predictions';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';
Predictions.addPluggable(new AmazonAIPredictionsProvider());

Predictions.convert({
  translateText: {
    source: {
      text: 'Hello World',
    },
  },
})
  .then(result => console.log({result}))
  .catch(err => console.log({err}));

AppRegistry.registerComponent(appName, () => App);
