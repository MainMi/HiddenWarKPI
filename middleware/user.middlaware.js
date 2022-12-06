const ApiError = require('../error/ErrorHandler');
const { groupService } = require('../service/schedule');
const { userValidator } = require('../validator');

module.exports = {
    isValidUser: (req, res, next) => {
        try {
            const { error } = userValidator.createUserValidator.validate(req.body);
            if (error) {
                next(new ApiError(402, 4022, error.details[0].message));
            }
            req.user = req.body;
            next();
        } catch (e) {
            next(e);
        }
    },
    isValidGroup: async (req, res, next) => {
        const { group } = req.user;
        if (!group) {
            next();
            return;
        }

        const groupFind = await groupService.getGroupByName(group);

        if (!groupFind.length) {
            next(new ApiError(402, 4024, 'This group not found'));
            return;
        }

        req.user.group = groupFind[0]._id;

        next();
    }
};
