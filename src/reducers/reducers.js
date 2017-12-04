import { combineReducers } from 'redux'

import { mallReducer } from './mallReducer'
import { cartReducer } from './cartReducer'
import { productsReducer } from './productsReducer'

export const reducers = combineReducers({mallReducer,cartReducer,productsReducer});