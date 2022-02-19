const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList, 
    GraphQLInt 
} = graphql;
const { LyricSchema } = require('../models/lyric');
const Lyric = mongoose.model('lyric', LyricSchema);

const LyricType = new GraphQLObjectType({
    name: 'LyricType',
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        likes: { type: GraphQLInt },
        usersLike: { 
            type: new GraphQLList(require('./user_type')) ,
            async resolve(parentValue) {
              return await Lyric.findById(parentValue.id)
                      .populate('usersLike')
                      .then(lyric => { return lyric.usersLike })
            }
          },
        dislikes: { type: GraphQLInt },
        usersDislike: { 
            type: new GraphQLList(require('./user_type')) ,
            async resolve(parentValue) {
              return await Lyric.findById(parentValue.id)
                      .populate('usersDislike')
                      .then(lyric => { return lyric.usersDislike })
            }
        },
        song: {
            type: require('./song_type'),
            async resolve(parentValue) {
                return await Lyric.findById(parentValue.id)
                        .populate('song')
                        .then(lyric => {
                            return lyric.song
                        });
            }
        },
        user: { 
            type: require('./user_type'),
            async resolve(parentValue) {
                return await Lyric.findById(parentValue.id)
                    .populate('user')
                    .then(lyric => {
                        return lyric.user
                    });
            }
        }
    })
})

module.exports = LyricType;