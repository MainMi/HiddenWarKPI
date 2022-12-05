const userModel = require('../model/user.model');

module.exports = {
    createUser: (user) => userModel.create(user)
};
