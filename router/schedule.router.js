const router = require('express').Router();

const uploadRouter = require('./upload.router');

router.get('/', (req, res) => res.json('ok'));
router.use('/upload', uploadRouter);

module.exports = router;
