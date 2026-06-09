const express = require('express');
const teamController = require('../controllers/team.controller');

const router = express.Router();

router.post('/', teamController.create);
router.get('/', teamController.findAll);
router.get('/:id', teamController.findById);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.delete);

module.exports = router;