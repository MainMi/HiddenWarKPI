const router = require('express').Router();

const { uploadController } = require('../controller');

router.get('/', (req, res) => res.json('ok'));
router.get('/group', uploadController.uploadGroupData);
router.get('/lecture', uploadController._uploadLectureData);
router.get('/lessons', uploadController._uploadAllCurrentSchedule);

// const { uploadService } = require('../service');

module.exports = router;
