const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://alicec:aluno@cluster0.3rfam.mongodb.net/pet_shop', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
    
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;