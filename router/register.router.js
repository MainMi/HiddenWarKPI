const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');
// router.get('/', );
// eslint-disable-next-line function-paren-newline
router.post('/',
    userMiddleware.isValidUser,
    userMiddleware.isValidGroup,
    userController.createUser
);

module.exports = router;
