const ApiError = require('../error/ErrorHandler');

module.exports = {
    checkKahootId: (req, res, next) => {
        try {
            const { kahootid } = req.params;
            if (kahootid.length !== 36) {
                throw new ApiError(402, 4021, 'not valid Id');
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};
