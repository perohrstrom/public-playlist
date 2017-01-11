import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/app/store/createStore'
import Main from './src/app/components/Main'

let store = configureStore()

export default class PublicPlaylist extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PublicPlaylist', () => PublicPlaylist);
