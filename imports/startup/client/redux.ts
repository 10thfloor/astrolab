import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { client } from './apollo'

export const store = createStore(
    combineReducers({
        apollo: client.reducer(),
    }),
    composeWithDevTools(
        applyMiddleware(client.middleware()),
    )
)
