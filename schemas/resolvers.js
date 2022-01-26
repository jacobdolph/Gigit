const { Gig } = require("../models");

const resolvers = {
  Query: {
    gig: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Gig.find(params);
    },
  },
};

module.exports = resolvers;
