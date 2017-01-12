import { combineReducers } from 'redux';
import newSearchForm from './newSearchFormReducer'
import searchResults from './searchResultsReducer'
import routes from './routes'

const indexReducer = combineReducers({ newSearchForm, searchResults, routes })

export default indexReducer
