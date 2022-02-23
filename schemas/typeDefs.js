// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Gigs {
    _id: ID
    gigName: String
    gigType: String
    userName: String
    phoneNum: String
    email: String
    dateBooked: String
    date: String
    addOne: String
    addTwo: String
    city: String
    endTime: String
    startTime: String
    usState: String
    zip: String
    gigDate: String
    userNotes: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    gigs: [Gigs]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    gigs: [Gigs]
    gig(email: String!): [Gigs]
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addGig(
      gigName: String!
      gigType: String!
      userName: String!
      phoneNum: String!
      dateBooked: String!
      date: String!
      city: String!
      endTime: String!
      startTime: String!
      usState: String!
      zip: String!
      gigDate: String!
      userNotes: String!
    ): Gigs
  }
`;

// export the typeDefs
module.exports = typeDefs;
