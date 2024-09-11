const mongoose = require('mongoose')

const mongoDB ="mongodb+srv://alicec:aluno@cluster0.3rfam.mongodb.net/banco"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conectado "))
    .catch(err => console.log(err))

module.exports= mongoose