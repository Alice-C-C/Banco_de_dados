const Cliente = require('../models/cliente_model.js');

createCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar cliente' });
  }
};

getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar clientes' });
  }
};

getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
};


//{ new: true } retorna o novo documento atualizado
updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar cliente' });
  }
};

deleteCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar cliente' });
  }
};

module.exports ={
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente
}