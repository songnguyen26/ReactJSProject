import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer.js'
const rootReducer = combineReducers({ cart: cartReducer });
export const store=createStore(rootReducer)

export default store;