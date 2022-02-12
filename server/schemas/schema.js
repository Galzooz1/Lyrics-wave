const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('../types/actions/queries');
const mutations = require('../types/actions/mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});
