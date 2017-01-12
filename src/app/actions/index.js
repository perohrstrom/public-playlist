export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const handleChange = (text) => {
  return {
    type: HANDLE_CHANGE,
    payload: text.toUpperCase()
  }
}

export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export const updateSearchResults = (array) => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    payload: array
  }
}
