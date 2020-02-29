const { ApolloServer } = require('apollo-server-express')
const path = require('path')
const fs = require('fs')
const resolvers = require('./resolvers')
const mockUsers = require('../mock/users.json')
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.gql')).toString()
module.exports = (app) => {
  // Provide resolver functions for your schema fields

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.header.authorization || ''
      const id = Number(token)
      console.log('id', id)
      const user = mockUsers.find(u => u.id === id)
      return { user }
    }
  })
  apollo.applyMiddleware({ app })
}
