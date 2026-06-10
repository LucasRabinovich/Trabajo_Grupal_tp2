import express from 'express';
import matchController from '../controllers/match.controller.js';

const router = express.Router();

router.post('/', matchController.create);
router.get('/', matchController.findAll);
router.get('/:id', matchController.findById);
router.put('/:id', matchController.update);
router.delete('/:id', matchController.delete);

export default router;