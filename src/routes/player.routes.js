import express from 'express';
import playerController from '../controllers/player.controller.js';

const router = express.Router();

router.post('/', playerController.create);
router.get('/', playerController.findAll);
router.get('/:id', playerController.findById);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.delete);

export default router;