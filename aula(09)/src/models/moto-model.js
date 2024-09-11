const db = require("../db.js")

const Schema = db.Schema

const motoSchema = new Schema({
    marca:{
        type : Schema.Types.String,
        require: true
    },
    cor:{
        type: Schema.Types.Boolean,
        require: true
    },
    modelo:{
        type : Schema.Types.String,
        require: true
    },
    cilindradas:{
        type : Schema.Types.Number,
    },
    peso:{
        type : Schema.Types.Number,
        require: true
    }
})

const Moto = db.model("Moto", motoSchema)

module.exports = Moto