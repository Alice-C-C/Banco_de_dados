const express = require('express');
const router = express.Router();
const livro_controller = require('../controllers/livro_controller');

router.post('/', livro_controller.createLivro );
router.get('/', livro_controller.getLivros);
router.get('/:autor', livro_controller.getLivroByautor);
router.get('/:ano', livro_controller.getLivroByano);
router.get('/:genero', livro_controller.getLivroBygenero);
router.get('/:id', livro_controller.getLivroById);
router.put('/:id', livro_controller.updateLivro);
router.delete('/:id', livro_controller.deleteLivro);

module.exports = router;