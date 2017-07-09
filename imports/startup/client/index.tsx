import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { ApolloProvider } from 'react-apollo'

import apolloClient from '../apollo-client'
import reduxStore from '../redux-store'

import Routes from '../routes'
const history = createBrowserHistory()
const client = apolloClient()
const store = reduxStore(history, client)

Meteor.startup(() => {
  render(
    <ApolloProvider client={client} store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ApolloProvider>,
    document.getElementById('react-app'))
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js', { scope: './' })
  }
})


