const { ApolloServer, gql } = require('apollo-server-express')
module.exports = (app) => {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
  type Query {
    hello: String
  }
`

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!'
    }
  }

  const apollo = new ApolloServer({ typeDefs, resolvers })
  apollo.applyMiddleware({ app })
}
