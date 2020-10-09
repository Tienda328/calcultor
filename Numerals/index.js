/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Index from './src/components/index';
import Number from './src/components/number';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Number);
