import { Meteor } from 'meteor/meteor'
import ApolloClient from 'apollo-client'
import { meteorClientConfig, createMeteorNetworkInterface } from 'meteor/apollo'

export const client = new ApolloClient(meteorClientConfig({
    networkInterface: createMeteorNetworkInterface({
        uri: Meteor.absoluteUrl('graphql', { secure: Meteor.isProduction }),
        useMeteorAccounts: true
    })
}))

