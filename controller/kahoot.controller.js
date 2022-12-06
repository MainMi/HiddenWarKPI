const ApiError = require('../error/ErrorHandler');
const { kahootService } = require('../service');

module.exports = {
    kahootGetAnswers: async (req, res, next) => {
        try {
            const { kahootID } = req.params;
            req.data = await kahootService.getKahootData(kahootID);
            next();
        } catch (e) {
            next(new ApiError(402, 0, 'Kahoot ID error'));
        }
    },
};
