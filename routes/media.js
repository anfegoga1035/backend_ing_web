const { Router } = require('express');
const { createMedia,getMedias } = require('../controllers/media');

const router = Router();

// Crear un director
router.post('/', createMedia);



// Editar 
router.put('/:id', editMedia);

// Eliminar u
router.delete('/:id', deleteMedia);

// Obtener todos 
router.get('/', getMedia);




module.exports = router;
