const router = require('express').Router();

const scheduleRouter = require('./schedule.router');

// const { scheduleService } = require('../service');
// const scheduleRouter = require('./schedule.router');

// router.get('/', scheduleService.defaultSchedule);
router.use('/schedule', scheduleRouter);
// router.get('/:kahootid', apiController.helloWorld);

module.exports = router;
// const { hiddenwarrionRouter } = require('.');
// const { mainRender } = require('../render');
// router.get('/hidden-warrion',hiddenwarrionRouter)
