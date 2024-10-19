const ServicePessoa = require('../services/pessoas')



// criando a classe croller da pessoa
class ControllerPessoa {
    // todas as funções do controller, recebem req, res
    GetPessoas(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const pessoas = ServicePessoa.GetPessoas()
            res.send({ msg: pessoas })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    CreatePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const name = req.body.name
            const pessoa = ServicePessoa.CreatePessoa(name)
            res.send({ msg: pessoa })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    UpdatePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const name = req.body.name
            const pessoa = ServicePessoa.UpdatePessoa(id,name)
            res.send({ msg: pessoa })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    DeletePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const pessoa = ServicePessoa.DeletePessoa(id)
            res.send({ msg: pessoa })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }
}
module.exports = new ControllerPessoa()

