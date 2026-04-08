const express = require('express');
const router = express.Router();
const TurmaController = require('../controllers/TurmaController');

router.get('/', TurmaController.listar);
router.post('/', TurmaController.criar);

module.exports = router;