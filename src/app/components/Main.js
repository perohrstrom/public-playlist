import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.newSearchForm
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(text){
    this.props.handleChange(text)
  }

  render(){
    return {
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleChange}
        value={this.state.text}
      />
    }
  }
}


module.exports = Main
