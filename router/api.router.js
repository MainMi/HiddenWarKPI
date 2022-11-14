const { apiController } = require('../controller');
const { mainRender } = require('../render');

const router = require('express').Router();

router.get('/',mainRender.defaultPage)


module.exports = router