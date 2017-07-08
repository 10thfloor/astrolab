import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux'

import apolloClient from './apollo'

import rootSaga from '../ui/redux/rootSaga'
const sagaMiddleWare = createSagaMiddleware()

export default (history, req?) => {

    const client = apolloClient(req)

    const store = createStore(
        combineReducers({
            apollo: client.reducer(),
            router: routerReducer
        }),
        composeWithDevTools(
            applyMiddleware(
                client.middleware(),
                routerMiddleware(history),
                sagaMiddleWare
            ),
        )
    )
    sagaMiddleWare.run(rootSaga)
    return store
}






