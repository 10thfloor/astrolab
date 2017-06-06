import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'

import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'
import { ApolloProvider } from 'react-apollo'

import Hello from '../imports/ui/components/Hello'

export default class HelloWorld extends React.Component<{}, {}> {
    render() {
        return (
            <Hello />
        )
    }
}

const client = new ApolloClient(meteorClientConfig())

Meteor.startup(() => {
    render(
    <ApolloProvider client={client}>
        <HelloWorld />
    </ApolloProvider>,
    document.getElementById('react-app'))
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js', { scope: './' })
    }
})


