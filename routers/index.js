const express = require('express');
const router = express.Router();
const { ErrorLogger, RequestLogger } = require('../middlewares');
const userRouter = require('./userRouter');
const {AuthMiddleware} = require('../middlewares')

router.use(RequestLogger);

router.use(ErrorLogger);

router.use(AuthMiddleware);

router.use(userRouter);

module.exports = router;