import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

export default (history, client) => {

  const withDevTools = (mw) => {
    if (Meteor.isClient) {
      return composeWithDevTools(mw)
    }
    return mw
  }

  return createStore(
    combineReducers({
      apollo: client.reducer(),
      router: routerReducer
    }),
    client.initialState,
    withDevTools(
      applyMiddleware(
        client.middleware(),
        routerMiddleware(history)
      )
    )
  )
}






