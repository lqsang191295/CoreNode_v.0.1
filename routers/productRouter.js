const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');
const {VERSION} = require('../config');
const {handleLogger} = require('../middlewares');

router.get(`/${VERSION}/products`, handleLogger(productController.get()));
router.post(`/${VERSION}/products`, handleLogger(productController.create()));
router.put(`/${VERSION}/products`, handleLogger(productController.update()));
router.delete(`/${VERSION}/products/:id`, handleLogger(productController.delete()));

module.exports = router;
