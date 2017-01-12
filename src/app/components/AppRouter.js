import React, { Component } from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import Songsearch from './Songsearch'
import RecordingQueue from './RecordingQueue'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="songsearch" component={Songsearch} title="Search for a Song" initial={true} />
    <Scene key="recordingqueue" component={RecordingQueue} title="Add to Playlist"/>
  </Scene>
)

export default class AppRouter extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <Router scenes={scenes}/>
    );
  };
}
