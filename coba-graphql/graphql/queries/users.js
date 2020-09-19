var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var services = require('../../services');
var userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            user: {
                type: new GraphQLList(userType),
                resolve: services.getUsers
            }
        }
    }
});