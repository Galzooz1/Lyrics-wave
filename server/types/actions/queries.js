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
        }
    }
})

module.exports = RootQueryType;
