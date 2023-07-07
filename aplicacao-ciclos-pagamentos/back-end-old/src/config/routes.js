const express = require('express')
const auth = require('./auth')

module.exports = function(server){
    //Rotas protegidas por Token JWT
    const protectdApi = express.Router()
    server.use('/api', protectdApi)
    
    protectdApi.use(auth)

    //Rotas de Ciclo de Pagamento
    const CicloPagamento = require('../api/cicloPagamento/servicoCicloPagamento')
    CicloPagamento.register(router, '/ciclosPagamento')
    
    //Rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}