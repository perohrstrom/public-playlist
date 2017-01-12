import { combineReducers } from 'redux';
import newSearchForm from './newSearchFormReducer'
import searchResults from './searchResultsReducer'

const indexReducer = combineReducers({ newSearchForm, searchResults })

export default indexReducer
