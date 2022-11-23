const router = require('express').Router();

const { scheduleController } = require('../controller');

router.get('/upload/group', scheduleController._uploadGroupData);
router.get('/upload/lecture', scheduleController._uploadLectureData);

// const { uploadService } = require('../service');

module.exports = router;
