import { Meteor } from 'meteor/meteor'
import ApolloClient from 'apollo-client'
import { meteorClientConfig, createMeteorNetworkInterface } from 'meteor/apollo'

export default (req?) => {

  let networkInterface = {
    uri: Meteor.absoluteUrl('graphql', { secure: Meteor.isProduction }),
    useMeteorAccounts: true,
  }

  if (Meteor.isServer && req) {
    networkInterface = {
      ...networkInterface,
      opts: {
        credentials: 'same-origin',
        headers: req.headers
      },
      // Added by meteorhacks:fast-render
      loginToken: req.cookies['meteor_login_token']
    }
  }

  return new ApolloClient(
    meteorClientConfig({
      ssrMode: Meteor.isServer,
      ssrForceFetchDelay: Meteor.isServer && 100,
      initialState: Meteor.isClient ? window.__APOLLO_STATE__ : {},
      networkInterface: createMeteorNetworkInterface(networkInterface)
    }))
}




