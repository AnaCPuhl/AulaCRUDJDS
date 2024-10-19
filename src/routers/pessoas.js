const express = require('express')
const controllerPessoa = require('../controllers/pessoas')

// inicializando as rotas do express
const router = express.Router()


// criando as rotas
router.get('/', controllerPessoa.GetPessoas)
router.post('/', controllerPessoa.CreatePessoa)
router.put('/:id', controllerPessoa.UpdatePessoa)
router.delete('/:id', controllerPessoa.DeletePessoa)

// exportar as rotas
module.exports = router