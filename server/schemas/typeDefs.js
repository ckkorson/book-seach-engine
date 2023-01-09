const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}

type Query {
  me: User
}
`;

module.exports = typeDefs;