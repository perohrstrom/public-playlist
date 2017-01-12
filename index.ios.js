import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Scene, Router, Actions } from 'react-native-router-flux';

import Songsearch from './src/app/components/Songsearch';
import RecordingQueue from './src/app/components/RecordingQueue';

// import configureStore from './src/app/store/createStore';
// import VisibleApp from './src/app/containers/VisibleApp';

//let store = configureStore()

import indexReducer from './src/app/reducers/indexReducer'
const RouterWithRedux = connect()(Router);

import thunk from 'redux-thunk'
const middleware = [thunk]

const store = compose(
  applyMiddleware(...middleware)
)(createStore)(indexReducer)

export default class PublicPlaylist extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="songsearch" component={Songsearch} title="Search for a Song" initial={true} />
            <Scene key="recordingqueue" component={RecordingQueue} title="Add to Playlist"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PublicPlaylist', () => PublicPlaylist);
