const express = require('express')
const router = require('./src/routers/pessoas')


const app = express()

// Middlewere json 
app.use(express.json())

// adicionar as rotas ao express
app.use(router)


// inicilizar o servidor
app.listen(3000, () => "Servidor rodando na porta 3000")