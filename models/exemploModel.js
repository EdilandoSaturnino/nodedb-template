const mongoose = require('mongoose');

const ExemploSchema = new mongoose.Schema({
    nome: String,
    email: String,
});

module.exports = mongoose.model('Exemplo', ExemploSchema);
