const bcrypt = require('bcrypt');
const ApiError = require('../error/ErrorHandler');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: (password, hashPassword) => {
        const isPasswordEquels = bcrypt.compare(password, hashPassword);

        if (isPasswordEquels) {
            throw new ApiError(403, 4031, 'Wrong email or passworld');
        }
    }
};
