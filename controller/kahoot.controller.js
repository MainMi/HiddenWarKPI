const ApiError = require('../error/ErrorHandler');
const { kahootService } = require('../service');

module.exports = {
    kahootStartPage: async (req, res) => {
        res.json('Test');
    },
    kahootGetAnswers: async (req, res, next) => {
        try {
            const { kahootID } = req.params;
            const data = await kahootService.getKahootData(kahootID);
            res.json(data);
            next();
        } catch (e) {
            next(new ApiError(402, 0, 'Kahoot ID error'));
        }
    },
};
