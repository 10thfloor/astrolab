import { Meteor } from 'meteor/meteor'
import ApolloClient from 'apollo-client'
import { meteorClientConfig, createMeteorNetworkInterface } from 'meteor/apollo'


let networkInterface = {
    uri: Meteor.absoluteUrl('graphql', { secure: Meteor.isProduction }),
    useMeteorAccounts: true,
}

export default (req?) => {

    if (Meteor.isServer) {
        networkInterface = {
            ...networkInterface,
            opts: {
                credentials: 'same-origin',
                headers: req.headers,
            }
        }
    }

    const apolloClient = new ApolloClient(meteorClientConfig({
        ssrMode: Meteor.isServer,
        initialState: Meteor.isClient ? window.__APOLLO_STATE__ : undefined,
        networkInterface: createMeteorNetworkInterface(networkInterface)
    }))
    return apolloClient
}




