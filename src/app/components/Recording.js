import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Recording extends Component {
  constructor(props){
    super();
    this.state = {
      SpotifyId: props.id,
      trackName: props.name.toUpperCase(),
      preview_url: props.preview_url,
      trackUri: props.uri,
      album: props.album.name.toUpperCase(),
      image: props.album.images[0],
      artist: props.artists[0].name.toUpperCase()
    }
  }

  concatArtists(){
    if (this.state.artists.length > 1) {
      return this.state.artists[0].name
    } else {
      return this.state.artists.map((artist) => {
        return artist.name + " "
      })
    }
  }


  render(){
    const { artist, album, trackName, image } = this.state
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.playTrack}>
        <View style={styles.albumText}>
          <Image  source={{uri: image.url}} style={styles.albumCover} />
          <Text style={styles.recordText}>{trackName} by {artist}</Text>
        </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  albumCover: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  albumText: {
    backgroundColor: '#ebeef0',
    bottom: 10,
    flexDirection: 'column'
  },
  recordText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
})
