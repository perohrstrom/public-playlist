import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

var styles = require('./style')

export default class Main extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.props.handleChange(text)
  }

  render(){
    console.log(this.props)
    return (<TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={this.handleChange}
        value={this.props.newSearchForm}
      />
    )
  }
}


module.exports = Main
