const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList, 
    GraphQLInt 
} = graphql;
// const LyricType = require('./lyric_type');
const { SongSchema } = require('../models/song');
const UserType = require('./user_type');
const Song = mongoose.model('song', SongSchema);

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    likes: { type: GraphQLInt },
    user: { 
    type: require('./user_type'),
     async resolve(parentValue) {
         return await Song.findById(parentValue.id)
            .populate('user')
            .then(song => {
                return song.user
            });
     }
    }
    // lyrics: {
    //   type: new GraphQLList(LyricType),
    //   resolve(parentValue) {
    //     return Song.findLyrics(parentValue.id);
    //   }
    // }
  })
});

module.exports = SongType;