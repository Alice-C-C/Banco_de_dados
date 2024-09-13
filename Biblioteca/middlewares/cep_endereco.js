const axios = require("axios")

const cep_endereco = (req, res, next) => {
   axios.get(`https://viacep.com.br/ws/${req.body.endereco}/json/`)
   .then(resposta => {
      
      const {logradouro,bairro,localidade,uf,estado} = resposta.data
      delete req.body.endereco 
      req.body.endereco = {logradouro,bairro,localidade,uf,estado}
    next()
 })
}

module.exports = cep_endereco