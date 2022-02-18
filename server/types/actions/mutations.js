const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull 
} = graphql;
const UserType = require('../user_type');
const { 
    getUsers, 
    getUser 
} = require('../../controllers/userController');
const AuthService = require('../../services/auth');
const SongType = require('../song_type');
const { addSong, deleteSong } = require('../../controllers/songController');


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
        }
    }
})

module.exports = RootMutationType;