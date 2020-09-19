var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/user');
var services = require('../../services');

exports.add = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Phone: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.createUser(params);
    }
}