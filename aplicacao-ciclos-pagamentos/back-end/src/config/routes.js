const express = require('express')

module.exports = function(server){
    //Definindo a URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const CicloPagamento = require('../api/cicloPagamento/servicoCicloPagamento')
    CicloPagamento.register(router, '/ciclosPagamento')
}