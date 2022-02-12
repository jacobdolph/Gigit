const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();
const { auth } = require("express-openid-connect");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== "development") {
  app.use(express.static("client/build"));
}
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist", {
//   useNewUrlParser: true,
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
