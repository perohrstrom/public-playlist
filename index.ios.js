import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Scene, Router, Actions } from 'react-native-router-flux';

import VisibleApp from './src/app/containers/VisibleApp'
import Songsearch from './src/app/components/Songsearch';
import RecordingQueue from './src/app/components/RecordingQueue';

import configureStore from './src/app/store/configureStore';
// import VisibleApp from './src/app/containers/VisibleApp';

let store = configureStore()
const RouterWithRedux = connect()(Router);

// Boilerplate from walk-through
// import reducers from './src/app/reducers/indexReducer'
// console.log("this is my indexReducer",reducers)
// const RouterWithRedux = connect()(Router);
//
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
// const middleware = [thunk, createLogger]
//
// const store = compose(
//   applyMiddleware(...middleware)
// )(createStore)(reducers);


export default class PublicPlaylist extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="songsearch" component={VisibleApp} title="Search for a Song" initial={true} />
            <Scene key="recordingqueue" component={RecordingQueue} title="Add to Playlist"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PublicPlaylist', () => PublicPlaylist);
