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
const SongType = require('../song_type');
const { getSongs, getSong } = require('../../controllers/songController');


const RootQueryType = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
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
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, { id }) {
                return await getSong(id);
            }
        }
    }
})

module.exports = RootQueryType;
