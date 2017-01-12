import { UPDATE_SEARCH_RESULTS } from '../actions/index'

const initialState = []
const searchResults = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_RESULTS:
      return action.payload
    default:
      return state
  }
}

export default searchResults
