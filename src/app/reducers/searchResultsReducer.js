import { UPDATE_SEARCH_RESULTS } from '../actions/index'

const initialState = []
const searchResults = (state = initialState, action) => {
  debugger
  switch(action.type) {
    case UPDATE_SEARCH_RESULTS:
      return Object.assign([], state, action.payload)
    default:
      return state
  }
}

export default searchResults
