const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');
const {VERSION} = require('../config');
const {handleLogger} = require('../middlewares');

router.get(`/${VERSION}/users`, handleLogger(userController.get()));
router.post(`/${VERSION}/users`, handleLogger(userController.create()));
router.post(`/${VERSION}/users/:id`, handleLogger(userController.findOneById()));
router.put(`/${VERSION}/users`, handleLogger(userController.update()));
router.delete(`/${VERSION}/users/:id`, handleLogger(userController.delete()));

module.exports = router;
