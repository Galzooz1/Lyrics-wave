const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLInt,
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull 
} = graphql;
const UserType = require('../user_type');
const { 
    getUsers, 
    getUser 
} = require('../../controllers/userController');
const SongType = require('../song_type');
const { getSongs, getTopSongs ,getSong } = require('../../controllers/songController');
const { getLyric, getLyrics } = require('../../controllers/lyricController');
const LyricType = require('../lyric_type');


const RootQueryType = new GraphQLObjectType({
    name:"RootQueryType",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            async resolve(parentValue, args) {
                return await getUsers();
            }
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, { id }) {
                return await getUser(id);
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            async resolve(parentValue, args) {
                return await getSongs();
            }
        },
        topSongs: {
            type: new GraphQLList(SongType),
            args: { limitAmount: {type: new GraphQLNonNull(GraphQLInt)}, sortMethod: { type: new GraphQLNonNull(GraphQLString) } },
            async resolve(parentValue, {limitAmount, sortMethod}) {
                return await getTopSongs(limitAmount, sortMethod);
            }
        },
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, { id }) {
                return await getSong(id);
            }
        },
        lyrics: {
            type: new GraphQLList(LyricType),
            async resolve(parentValue, args) {
                return await getLyrics();
            }
        },
        lyric: {
            type: LyricType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, { id }) {
                return await getLyric(id);
            }
        },
    })
})

module.exports = RootQueryType;
