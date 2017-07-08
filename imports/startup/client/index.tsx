import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { ApolloProvider } from 'react-apollo'

import apolloClient from '../apollo'
import store from '../redux'

import Routes from '../routes'

const history = createHistory()

Meteor.startup(() => {
    render(
        <ApolloProvider client={apolloClient()} store={store(history)}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </ApolloProvider>,
        document.getElementById('react-app'))
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js', { scope: './' })
    }
})


