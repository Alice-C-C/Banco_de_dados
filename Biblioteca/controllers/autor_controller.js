const Autor = require('../models/autor_model.js');

createAutor = async (req, res) => {
  try {
    console.log(req.body);
    const autor = new Autor(req.body);
    await autor.save();
    res.status(201).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar autor' });
  }
};

getAutor = async (req, res) => {
  try {
    const autores = await Autor.find();
    res.status(200).json(autores);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autores' });
  }
};

getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    res.status(200).json(autor);

  } catch (error) {
    res.status(404).json({ error: 'Autor não encontrado' });
  }
};

updateAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar autor' });
  }
};

deleteAutor = async (req, res) => {
  try {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar autor' });
  }
};

module.exports ={
    createAutor,
    getAutor,
    getAutorById,
    updateAutor,
    deleteAutor
}