import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux'

import { history } from '../../client/react/index'
import { client } from './apollo'

export const store = createStore(
    combineReducers({
        apollo: client.reducer(),
        router: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            client.middleware(),
            routerMiddleware(history)
        ),
    )
)
