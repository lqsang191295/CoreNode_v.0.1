const express = require('express');
const router = express.Router();
const { producerController } = require('../controllers');
const {VERSION} = require('../config');
const {handleLogger} = require('../middlewares');

router.get(`/${VERSION}/producers`, handleLogger(producerController.get()));
router.post(`/${VERSION}/producers`, handleLogger(producerController.create()));
router.put(`/${VERSION}/producers`, handleLogger(producerController.update()));
router.delete(`/${VERSION}/producers/:id`, handleLogger(producerController.delete()));

module.exports = router;
