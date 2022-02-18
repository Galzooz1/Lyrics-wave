const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const { UserSchema } = require('../models/user');
const SongType = require('./song_type');
const User = mongoose.model('user', UserSchema);

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    nickname: { type: GraphQLString },
    songs: {
      type: new GraphQLList(SongType),
      resolve(parentValue) {
        return User.findSongs(parentValue.id);
        // await User.findById(parentValue.id)
        //       .populate('songs')
        //       .then(user => {
        //         console.log(1111,user)
        //         return [...user.songs]
        //       })
      }
    }
  })
});

module.exports = UserType;
