/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify, I18n} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

I18n.setLanguage('fr');
const dict = {
  fr: {
    'Sign In': 'Se connecter',
    'Sign Up': "S'inscrire",
  },
  es: {
    'Sign In': 'Registrarse',
    'Sign Up': 'Regístrate',
  },
};
I18n.putVocabularies(dict);
console.log(I18n.get('Sign In'));

AppRegistry.registerComponent(appName, () => App);
