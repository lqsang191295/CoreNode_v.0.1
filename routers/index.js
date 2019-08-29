const express = require('express');
const router = express.Router();
const { RequestLogger, AuthMiddleware } = require('../middlewares');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const producerRouter = require('./producerRouter');

router.use(authRouter);

// Middleware
router.use(RequestLogger);
router.use(AuthMiddleware);

// Routers
router.use(userRouter);
router.use(productRouter);
router.use(categoryRouter);
router.use(producerRouter);

module.exports = router;