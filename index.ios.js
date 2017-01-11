import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/app/store/createStore'
import VisibleApp from './src/app/containers/VisibleApp'

let store = configureStore()

export default class PublicPlaylist extends Component {
  render() {
    return (
      <Provider store={store}>
        <VisibleApp />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PublicPlaylist', () => PublicPlaylist);
