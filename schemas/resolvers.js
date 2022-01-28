const { Gig, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("gig");

        return userData;
      }

      throw new AuthenticationError("Not Logged In");
    },
    gigs: async () => {
      return Gig.find();
    },
    gig: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Gig.find(params);
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      const params = email ? { email } : {};
      return User.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addGig: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const gig = await Gig.create({
          ...args,
          email: context.user.email,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { gigs: gig._id } },
          { new: true }
        );

        return gig;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
