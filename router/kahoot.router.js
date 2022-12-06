const router = require('express').Router();
const { kahootRender } = require('../render');

const kahootController = require('../controller/kahoot.controller');

router.get('/', kahootRender.startPageRender);
router.get('/:kahootID', kahootController.kahootGetAnswers, kahootRender.answersRender);

module.exports = router;
