import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'

export const client = new ApolloClient(meteorClientConfig())

