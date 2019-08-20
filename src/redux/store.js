import rootReducer from './root-reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(rootReducer, applyMiddleware(thunk, logger))