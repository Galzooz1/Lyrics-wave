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
const LyricType = require('./lyric_type');
const User = mongoose.model('user', UserSchema);

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    nickname: { type: GraphQLString },
    // Songs
    songs: {
      type: new GraphQLList(SongType),
      resolve(parentValue) {
        return User.findSongs(parentValue.id);
      }
    },
    likedSongs: {
      type: new GraphQLList(SongType),
      async resolve(parentValue) {
        return await User.findById(parentValue.id)
                .populate('likedSongs')
                .then(user => { return user.likedSongs }) 
      }
    },
    dislikedSongs: {
      type: new GraphQLList(SongType),
      async resolve(parentValue) {
        return await User.findById(parentValue.id)
                .populate('dislikedSongs')
                .then(user => { return user.dislikedSongs });
      }
    },
    // Lyrics
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return User.findLyrics(parentValue.id);
      }
    },
    likedLyrics: {
      type: new GraphQLList(LyricType),
      async resolve(parentValue) {
        return await User.findById(parentValue.id)
                .populate('likedLyrics')
                .then(user => { return user.likedLyrics }) 
      }
    },
    dislikedLyrics: {
      type: new GraphQLList(LyricType),
      async resolve(parentValue) {
        return await User.findById(parentValue.id)
                .populate('dislikedLyrics')
                .then(user => { return user.dislikedLyrics });
      }
    },
  })
});

module.exports = UserType;
