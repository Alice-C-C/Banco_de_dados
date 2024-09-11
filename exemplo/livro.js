const db = require('./db.js')
const Schema = db.Schema

const livrosSchema = new Schema({
    nome:{
        type:String,
        require: [true, "Informe o nome"]
    },
    qtdPaginas:{
        type: Number
    }
})

const livro = db.model("Livro", livrosSchema)

livro.create({
    nome: "teste",
    qtdPaginas: 333
})