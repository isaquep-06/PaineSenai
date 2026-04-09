import express from 'express';
import SalaController from '../controllers/SalaController.js';

const router = express.Router();

router.post('/', SalaController.store);
router.get('/', SalaController.index);

export default router;