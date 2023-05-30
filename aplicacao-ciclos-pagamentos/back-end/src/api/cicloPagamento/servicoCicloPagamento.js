const CicloPagamento = require('./cicloPagamento')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({new: true, runValidators: true})

CicloPagamento.route('get', (req, res, next) =>{
    CicloPagamento.find({}, (err, docs) =>{
        if(!err){
            res.json(docs)
        } else{
            res.status(500).json({errors: [error]})
        }
    })
})

module.exports = CicloPagamento