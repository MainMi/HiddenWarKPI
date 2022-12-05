const router = require('express').Router();

const { apiController } = require('../controller');
const { apiMiddlaware } = require('../middleware');
const scheduleRouter = require('./schedule.router');

router.use('/schedule', scheduleRouter);

router.get('/:kahootid', apiMiddlaware.checkKahootId, apiController.helloWorld);

module.exports = router;
// const { hiddenwarrionRouter } = require('.');
// const { mainRender } = require('../render');
// router.get('/hidden-warrion',hiddenwarrionRouter)
