const router = require('express').Router();

const kahootController = require('../controller/kahoot.controller');

router.get('/', kahootController.kahootStartPage);
router.get('/:kahootID', kahootController.kahootGetAnswers);

module.exports = router;
