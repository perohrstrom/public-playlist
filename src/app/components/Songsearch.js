import React, { Component } from 'react';
import {
  TextInput,
  View,
  ListView,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Recording from './Recording';
import Styles from './style'

class Songsearch extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  handleChange(text){
    this.searchSpotify(text)
    this.props.handleChange(text)
  }

  searchSpotify(query){
    let url = "https://api.spotify.com/v1/search?query=" + query.split(' ').join("%20") + "&type=track"
    fetch(url)
      .then((response) =>
        response.json()
      )
      .then((json) => {
        this.props.updateSearchResults(json.tracks.items)
      })
  }

  render(){
  console.log("these are my props",this.props)
   const { searchResults } = this.props
   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
   const dataSource = ds.cloneWithRows(searchResults)
    return (<View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={this.handleChange}
        value={this.props.newSearchForm}
      />
      <Text>This is my {this.props.routes.scene.title}</Text>
      <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={(data) => <Recording {...data} /> }
        renderSeparator={(sectionId, rowId) => <View key={rowId}  />}
        automaticallyAdjustContentInsets={true}
      />
    </View>
  )}
}

export default connect(({routes}) => ({routes}))(Songsearch);
