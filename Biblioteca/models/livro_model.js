const mongoose = require('mongoose');
const db = require('../config/db');
const Schema = db.Schema


const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  genre: { type: [String], required: true },
});

const Livro = db.model('Livro', LivroSchema);
module.exports = Livro;
