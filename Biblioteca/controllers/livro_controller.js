const Livro = require('../models/livro_model.js');

createLivro = async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livro' });
  }
};

getLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar livros' });
  }
};

getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    res.status(200).json(livro);

  } catch (error) {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};

getLivroByautor = async (req, res) => {
  try {
    const autor = await Livro.findOne({"autor":req.params.autor} )
    res.status(200).json(autor);
  } catch (error) {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};

getLivroByano= async (req, res) => {
  try {
    const ano = await Livro.findOne({"ano":req.params.ano} )
    res.status(200).json(ano);
  } catch (error) {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};

getLivroBygenero = async (req, res) => {
  try {
    const genero = await Livro.findOne({"genero":req.params.genero} )
    res.status(200).json(genero);
  } catch (error) {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};
getLivroBytitulo = async (req, res) => {
  try {
    const titulo = await Livro.findOne({"titulo":req.params.titulo} )
    res.status(200).json(titulo);
  } catch (error) {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
}

updateLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
};

deleteLivro = async (req, res) => {
  try {
    await Livro.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar livro' });
  }
};

module.exports ={
  createLivro,
  getLivros,
  getLivroById,
  getLivroByautor,
  getLivroByano,
  getLivroBygenero,
  getLivroBytitulo,
  updateLivro,
  deleteLivro
}