
// search spotify for tracks by query
export const searchSpotify = (query) => {
  fetch("https://api.spotify.com/v1/search?query="+ query.split(' ').join("%20") + "&type=track")
    .then(response => {
      debugger
      if (response.ok) {
        return response.json()
      }
    })
    .catch((error) => {
      console.warn(error);
    })
}
