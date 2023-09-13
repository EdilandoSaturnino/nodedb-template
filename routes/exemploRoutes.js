const express = require('express');
const exemploController = require('../controllers/exemploController');

const router = express.Router();

router.post('/', exemploController.criarExemplo);
router.get('/', exemploController.listarExemplos);
router.get('/:id', exemploController.obterExemplo);
router.put('/:id', exemploController.atualizarExemplo);
router.delete('/:id', exemploController.deletarExemplo);

module.exports = router;
