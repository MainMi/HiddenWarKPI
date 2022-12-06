const router = require('express').Router();

const {
    scheduleRouter,
    KahootRouter,
    registerRouter,
    userRouter
} = require('.');

router.use('/schedule', scheduleRouter);
router.use('/kahoot', KahootRouter);
router.use('/register', registerRouter);
router.use('/users', userRouter);

module.exports = router;
