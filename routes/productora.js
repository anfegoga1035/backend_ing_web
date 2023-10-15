const { Router } = require('express');
const { createProductora, getProductoras } = require('../controllers/productora');

const router = Router();

// Crear una productora
router.post('/', createProductora);

/**
 * consultar todos los productoras
 */
router.get('/', getProductoras)

module.exports = router;
