const express = require('express');
const matchController = require('../controllers/match.controller');

const router = express.Router();

router.post('/', matchController.create);
router.get('/', matchController.findAll);
router.get('/:id', matchController.findById);
router.put('/:id', matchController.update);
router.delete('/:id', matchController.delete);

module.exports = router;