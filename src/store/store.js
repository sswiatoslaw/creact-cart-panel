import { createStore } from 'redux'
import reducer from './reducer.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
    reducer, devTools
)

export default store