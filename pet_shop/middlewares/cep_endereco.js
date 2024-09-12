const axios = require("axios")

const cep_endereco = (req, res, next) => {
 axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
 .then(resposta => {
    
    delete req.body.cep

    const {logradouro,bairro,localidade,uf,estado} = resposta.data
    req.body.endereco = {logradouro,bairro,localidade,uf,estado}

    delete req.body.cep 

    next()
 })
}

module.exports = cep_endereco