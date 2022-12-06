const router = require('express').Router();

const { scheduleRouter, KahootRouter } = require('.');

router.use('/schedule', scheduleRouter);
router.use('/kahoot', KahootRouter);

// router.get('/:kahootid', apiMiddlaware.checkKahootId, apiController.helloWorld);

module.exports = router;
// const { hiddenwarrionRouter } = require('.');
// const { mainRender } = require('../render');
// router.get('/hidden-warrion',hiddenwarrionRouter)
