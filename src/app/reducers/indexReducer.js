import { combineReducers } from 'redux';
import newSearchForm from './newSearchFormReducer'

const indexReducer = combineReducers({ newSearchForm })

export default indexReducer
