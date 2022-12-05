const ApiError = require('../error/ErrorHandler');
const { userValidator } = require('../validator');

module.exports = {
    isValidUser: (req, res, next) => {
        try {
            const { error } = userValidator.createUserValidator.validate(req.body);
            if (error) {
                next(new ApiError(402, 4022, error.details[0]));
            }
            req.user = req.body;
            next();
        } catch (e) {
            next(e);
        }
    }
};
