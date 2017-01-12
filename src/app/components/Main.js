import React, { Component } from 'react';
import {
  TextInput,
  View,
  ListView,
  Text
} from 'react-native';
import searchSpotify from '../helpers/spotify'
import Recording from './Recording'

var styles = require('./style')

export default class Main extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
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

  addToPlaylist(){

  }

  render(){
    console.log(this.props)
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
      <ListView
        contentContainerStyler={styles.container}
        enableEmptySections
        dataSource={dataSource}
        renderRow={(data) => <Recording addToPlaylist={this.props.addToPlaylist} {...data} /> }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    </View>
  )}
}


module.exports = Main
