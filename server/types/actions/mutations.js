const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull 
} = graphql;
const UserType = require('../user_type');
const AuthService = require('../../services/auth');
const SongType = require('../song_type');
const { 
    addSong, 
    deleteSong, 
    likeSong, 
    dislikeSong 
} = require('../../controllers/songController');
const LyricType = require('../lyric_type');
const { addLyric } = require('../../controllers/lyricController');


const RootMutationType = new GraphQLObjectType({
    name:"RootMutationType",
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                nickname: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { email, password, nickname }, req) {
                return AuthService.signup({ email, password, nickname, req})
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({ email, password, req });
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req) {
                const { user } = req;
                req.logout();
                return user;
            }
        },
        addSong: {
            type: SongType,
            args: {
                title: { type: GraphQLString }
            },
            async resolve(parentValue, args, req) {
                return await addSong(args, req);
            }
        },
        deleteSong: {
            type: SongType,
            args: { 
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parentValue, args, req) {
                return await deleteSong(args, req);
            }
        },
        likeSong: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, args, req) {
                return await likeSong(args, req);
            }
        },
        dislikeSong: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, args, req) {
                return await dislikeSong(args, req);
            }
        },
        addLyricToSong: {
            type: LyricType,
            args: {
                content: { type: GraphQLString },
                songId: { type: GraphQLID }
            },
            async resolve(parentValue, args, req) {
                return await addLyric(args, req);
            }
        },
    }
})

module.exports = RootMutationType;