const express = require('express');
const connectDB = require('./config/db');
const PORT = 3000;

const livro_router= require('./routers/livro_router');
const autor_router = require('./routers/autor_router.js');
const app = express();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/livros', livro_router);
app.use('/api/autores', autor_router);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});