// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type gigs {
    _id: ID
    gigName: String
    gigType: String
    name: String
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

  type Query {
    gig(email: String): [gigs]
  }
`;

// export the typeDefs
module.exports = typeDefs;
