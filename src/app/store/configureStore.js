import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import indexReducer from '../reducers/indexReducer'

// const createStoreMiddleware = applyMiddleware(thunk)(createStore)
//
// export default function configureStore(intialState){
//   return createStoreMiddleware(indexReducer, intialState)
// }

export default function configureStore(intialState){
  const logger = createLogger()
  const enhancer = compose(
    applyMiddleware(thunk, logger)
  )
  return createStore(indexReducer, intialState)
}
