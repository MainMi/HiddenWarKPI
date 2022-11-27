const ApiError = require('../error/ErrorHandler');
const { hiddenwarrionService } = require('../service');

module.exports = {
    helloWorld: async (req, res, next) => {
        try {
            const { kahootid } = req.params;
            const data = await hiddenwarrionService.defaultKahoot(kahootid);
            res.json(data);
            next();
        } catch (e) {
            next(new ApiError(402, 0, 'not valid id'));
        }
    },
};
