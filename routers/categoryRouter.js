const express = require('express');
const router = express.Router();
const { categoryController } = require('../controllers');
const {VERSION} = require('../config');
const {handleLogger} = require('../middlewares');

router.get(`/${VERSION}/categories`, handleLogger(categoryController.get()));
router.post(`/${VERSION}/categories`, handleLogger(categoryController.create()));
router.put(`/${VERSION}/categories`, handleLogger(categoryController.update()));
router.delete(`/${VERSION}/categories/:id`, handleLogger(categoryController.delete()));

module.exports = router;
