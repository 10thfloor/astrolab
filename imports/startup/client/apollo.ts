import { Meteor } from 'meteor/meteor'
import ApolloClient from 'apollo-client'
import { meteorClientConfig, createNetworkInterface } from 'meteor/apollo'

export const client = new ApolloClient(meteorClientConfig({
    networkInterface: createNetworkInterface({
        uri: Meteor.absoluteUrl('graphql'),
        useMeteorAccounts: true
    })
}))

