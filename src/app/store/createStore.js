import { createStore, applyMiddleware } from 'redux'
import indexReducer from '../reducers/index'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const createStoreMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(intialState){
  return createStoreMiddleware(indexReducer, intialState)
}
