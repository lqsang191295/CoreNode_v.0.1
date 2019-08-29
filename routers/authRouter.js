const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const {handleLogger} = require('../middlewares');
const {VERSION} = require('../config');

router.post(`/${VERSION}/login`, handleLogger(authController.login()));
router.post(`/${VERSION}/register`, handleLogger(authController.register()));

module.exports = router;
