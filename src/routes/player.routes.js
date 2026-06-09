const express = require('express');
const playerController = require('../controllers/player.controller');

const router = express.Router();

router.post('/', playerController.create);
router.get('/', playerController.findAll);
router.get('/:id', playerController.findById);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.delete);

module.exports = router;