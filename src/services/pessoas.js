const ModelPessoa = require('../models/pessoas')


// criando a classe service pessoa
class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }
    async CreatePessoa(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!");
            
        }
        return ModelPessoa.create({name, password, email})
    }
    async UpdatePessoa(id, name, password, email) {
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
            
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password || pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
        
        // return ModelPessoa.update({ id, name, password, email }, {where: { id }})
    }
    async DeletePessoa(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
            
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
            
        }
        return pessoa.destroy()
        // return ModelPessoa.destroy({ where: { id }})
    }
}

module.exports = new ServicePessoa()