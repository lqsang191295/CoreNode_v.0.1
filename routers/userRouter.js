const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');

router.get('/', userController.get());
router.post('/create', userController.create());
router.post('/edit', userController.update());
router.post('/delete', userController.delete());

module.exports = router;
