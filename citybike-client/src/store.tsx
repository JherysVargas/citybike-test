import { createStore, combineReducers } from 'redux'

import { map } from './reducers/map'
import { search } from './reducers/search'

const reducers = { map, search }

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer)

export { store }