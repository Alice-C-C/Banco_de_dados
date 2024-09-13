const express = require('express');
const router = express.Router();
const autor = require('../controllers/autor_controller');
const cep_endereco = require('../middlewares/cep_endereco');

router.post('/',cep_endereco, autor.createAutor );
router.get('/', autor.getAutor);
router.get('/:id', autor.getAutorById);
router.put('/:id', autor.updateAutor);
router.delete('/:id', autor.deleteAutor);

module.exports = router;