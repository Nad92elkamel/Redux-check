import {combineReducers, createStore} from 'redux'
import { TaskReducers } from './reducers/TaskReducers'
const rootReducer = combineReducers({task : TaskReducers})
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store