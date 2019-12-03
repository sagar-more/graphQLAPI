const { GraphQLSchema } = require("graphql");

const { RootQuery } = require("../queryTypes/elements");

module.exports = new GraphQLSchema({
    query: RootQuery
});