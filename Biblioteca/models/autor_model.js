
const mongoose = require('mongoose');
const db = require('../config/db');
const Schema = db.Schema


const AutorSchema = new Schema({
  nome: { type: String, required: true },
  endereco: { type: Object, required: true },
  email: { type: String, 
    validar:{
        validator: function (v) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
          },

    }, required: true },
});

const Autor = db.model('Autor', AutorSchema);
module.exports = Autor;
