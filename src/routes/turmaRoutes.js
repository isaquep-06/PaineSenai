import express from 'express'
import TurmaController from '../controllers/TurmaController.js';

const router = express.Router();

router.get('/', TurmaController.index);
router.post('/', TurmaController.store);

export default router