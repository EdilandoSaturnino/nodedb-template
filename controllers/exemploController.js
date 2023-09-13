const Exemplo = require('../models/exemploModel');

// Create
exports.criarExemplo = async (req, res) => {
    const exemplo = new Exemplo(req.body);
    await exemplo.save();
    res.status(201).json({ message: 'Exemplo criado com sucesso', data: exemplo });
};

// Read
exports.listarExemplos = async (req, res) => {
    const exemplos = await Exemplo.find();
    res.status(200).json({ message: 'Exemplos obtidos com sucesso', data: exemplos });
};

// Read One
exports.obterExemplo = async (req, res) => {
    const exemplo = await Exemplo.findById(req.params.id);
    if (!exemplo) return res.status(404).json({ message: 'Exemplo não encontrado' });
    res.status(200).json({ message: 'Exemplo obtido com sucesso', data: exemplo });
};

// Update
exports.atualizarExemplo = async (req, res) => {
    const exemplo = await Exemplo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exemplo) return res.status(404).json({ message: 'Exemplo não encontrado' });
    res.status(200).json({ message: 'Exemplo atualizado com sucesso', data: exemplo });
};

// Delete
exports.deletarExemplo = async (req, res) => {
    await Exemplo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Exemplo deletado com sucesso' });
};
