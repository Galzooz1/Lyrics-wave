const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList, 
    GraphQLInt
} = graphql;

const {
  GraphQLDateTime
} = require('graphql-iso-date');

const { SongSchema } = require('../models/song');
const LyricType = require('./lyric_type');
const Song = mongoose.model('song', SongSchema);

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLDateTime },
    title: { type: GraphQLString },
    likes: { type: GraphQLInt },
    usersLike: { 
      type: new GraphQLList(require('./user_type')) ,
      async resolve(parentValue) {
        return await Song.findById(parentValue.id)
                .populate('usersLike')
                .then(song => { return song.usersLike })
      }
    },
    dislikes: { type: GraphQLInt },
    usersDislike: { 
      type: new GraphQLList(require('./user_type')) ,
      async resolve(parentValue) {
        return await Song.findById(parentValue.id)
                .populate('usersDislike')
                .then(song => { return song.usersDislike })
      }
    },
    user: { 
      type: require('./user_type'),
      async resolve(parentValue) {
          return await Song.findById(parentValue.id)
              .populate('user')
              .then(song => {
                  return song.user
              });
      }
    },
    lyrics: {
      type: new GraphQLList(LyricType),
      async resolve(parentValue) {
        return await Song.findById(parentValue.id)
          .populate('lyrics')
          .then(song => {
              return song.lyrics
          });
      }
    }
  })
});

module.exports = SongType;