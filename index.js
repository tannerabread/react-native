/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, PubSub, Auth} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

// const pubsub = new PubSub();

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-1',
    aws_pubsub_endpoint:
      'wss://a2b5xt8ljhusrb-ats.iot.us-east-1.amazonaws.com/mqtt',
  }),
);

async function signIn() {
  try {
    const user = await Auth.signIn('testuser20', 'testtest');
    console.log({user});
    Auth.currentCredentials().then(info => {
      const cognitoIdentityId = info.identityId;
      console.log({cognitoIdentityId});
    });
  } catch (error) {
    console.log('error signing in', error);
  }
}
signIn();

PubSub.subscribe('myTopic').subscribe({
  next: data => console.log('Message received', data),
  error: error => console.error(error),
  complete: () => console.log('Done'),
});
async function publish() {
  await PubSub.publish('myTopic', {msg: 'Hello to all subscribers!'});
}
publish();

AppRegistry.registerComponent(appName, () => App);
