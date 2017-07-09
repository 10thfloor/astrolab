import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools'
import * as typeDefs from './api.schema.gql'
import { resolvers } from './resolvers'

const logger = { log: (e) => console.error(e.stack) }

export default (): void => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  addErrorLoggingToSchema(schema, logger)
  createApolloServer({
    schema,
  })
}
