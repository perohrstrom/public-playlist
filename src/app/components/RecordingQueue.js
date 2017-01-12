import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class RecordingQueue extends Component {
  constructor(props){
    super();
    this.state = {

    }
  }

  render(){
    console.log(this.props)
    return(
      <View>
        <Text>Go Back to Search Results</Text>
      </View>
    )
  }
}
