const { Router } = require('express');
const { createDirector, getDirectores} = require('../controllers/director');

const router = Router();

// Crear un director
router.post('/', createDirector);

/**
 * consultar todos los directores
 */
router.get('/', getDirectores)

module.exports = router;
