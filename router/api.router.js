// const { hiddenwarrionRouter } = require('.');
const { apiController } = require('../controller');
const { mainRender } = require('../render');
const { scheduleService } = require('../service');

const router = require('express').Router();

router.get('/',scheduleService.defaultSchedule)
router.get('/:kahootid',apiController.helloWorld)
// router.get('/hidden-warrion',hiddenwarrionRouter)


module.exports = router