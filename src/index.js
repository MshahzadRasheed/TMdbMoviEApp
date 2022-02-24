// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  View,
  NativeModules,
  StatusBar,
  LogBox,
  Platform,
} from 'react-native';
import {MessageBar} from './components';
import configureStore from './store';
import Routing from './navigator';
import applyConfigSettings from './config';
import AppStyles from './theme/AppStyles';
import Util from './util';
import DataHandler from './services/DataHandler';
import KeyboardManager from 'react-native-keyboard-manager';

const reducers = require('./reducers').default;
LogBox.ignoreAllLogs(true);
applyConfigSettings();

export default class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this._loadingCompleted();
      this.setState({isLoading: false});
    }),
  };

  _loadingCompleted() {
    DataHandler.setStore(this.state.store);
  }

  componentDidMount() {
    /* if (Util.isPlatformAndroid()) {
      setTimeout(() => {
        NativeModules.SplashScreen.hide();
      }, 1000);
    } */
  }

  render() {
    // if (this.state.isLoading) {
    //   return null;
    // }
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnableAutoToolbar(true);

      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    }

    return (
      <View style={AppStyles.flex}>
        <Provider store={this.state.store}>
          <Routing />
        </Provider>
        <MessageBar />
      </View>
    );
  }
}

AppRegistry.registerComponent('AutoConnect', () => App);
