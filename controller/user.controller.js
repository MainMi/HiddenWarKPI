const { passwordHasher } = require('../helper');
const { userService } = require('../service');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hasPassword = await passwordHasher.hash(password);

            userService.createUser({ ...req.body, password: hasPassword });

            res.status(201).json('User created');

            next();
        } catch (e) {
            next(e);
        }
    },
    getUsers: async (req, res) => {
        res.json(await userService.getUsers());
    },
};
