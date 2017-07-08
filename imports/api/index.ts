import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import * as typeDefs from './api.schema.gql'
import { resolvers } from './resolvers'

export default (): void => {
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    })
    createApolloServer({
        schema,
    })
}
