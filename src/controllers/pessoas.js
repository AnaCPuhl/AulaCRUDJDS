const ServicePessoa = require('../services/pessoas')



// criando a classe croller da pessoa
class ControllerPessoa {
    // todas as funções do controller, recebem req, res
    async GetPessoas(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const pessoas = await ServicePessoa.GetPessoas()
            res.send({ msg: pessoas })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async CreatePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
  
            const { name, password, email } = req. body

            const pessoa = await ServicePessoa.CreatePessoa(name, password, email)
            res.send({ msg: pessoa })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async UpdatePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const name = req.body.name
            const password = req.body.name
            const email = req.body.name
            const pessoa = await ServicePessoa.UpdatePessoa(id,name, password, email)
            res.send({ msg: pessoa })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async DeletePessoa(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            await ServicePessoa.DeletePessoa(id)
            res.status(204). send()
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }
}
module.exports = new ControllerPessoa()

