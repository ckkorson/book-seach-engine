const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user){
        const userData = await User.findOne({_id: context.user._id})

        return userData
      }
    }
  }
};

module.exports = resolvers;
