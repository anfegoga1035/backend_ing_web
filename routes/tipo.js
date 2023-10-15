const { Router } = require('express');
const { createTipo, getTipos } = require('../controllers/tipo');

const router = Router();

// Crear un director
router.post('/', createTipo);

/**
 * consultar todos los tipos
 */
router.get('/', getTipos)

module.exports = router;
//akahdkha