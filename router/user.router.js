const router = require('express').Router();

const { userController } = require('../controller');

router.get('/', userController.getUsers);

module.exports = router;
