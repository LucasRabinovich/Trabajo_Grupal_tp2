import express from 'express';
import teamController from '../controllers/team.controller.js';

const router = express.Router();

router.post('/', teamController.create);
router.get('/', teamController.findAll);
router.get('/:id', teamController.findById);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.delete);

export default router;