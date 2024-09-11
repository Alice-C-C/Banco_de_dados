const db = require("../db.js")
const cep_endereco = require("../midlewares/cep_endereco.js")

const Schema = db.Schema

const AeroportoSchema = new Schema({
    nome:{
        type : Schema.Types.String,
        require: true
    },
    endereco:{
        type: Schema.Types.Mixed,
        require: true
    }
  
})

const Aeroporto = db.model("Aeroporto", AeroportoSchema)

module.exports = Aeroporto