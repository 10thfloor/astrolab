import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import { client } from './apollo'
import { store } from './redux'

import App from '../../client/react'

Meteor.startup(() => {
    render(
        <ApolloProvider client={client} store={store}>
            <App />
        </ApolloProvider>,
        document.getElementById('react-app'))
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js', { scope: './' })
    }
})


