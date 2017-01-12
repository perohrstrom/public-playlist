import { combineReducers } from 'redux';
import newSearchForm from './newSearchFormReducer'
import searchResults from './searchResultsReducer'
import routes from './routes'

export default combineReducers({ routes, newSearchForm, searchResults })

export const getNav = (state) =>
  routes.getNav(state.nav)
