const { apiController } = require('../controller');
const { mainRender } = require('../render');
const { rozkladService } = require('../service');

const router = require('express').Router();

router.get('/',rozkladService.defaultRozklad)


module.exports = router