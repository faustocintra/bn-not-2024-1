import mongoose from "mongoose";

const FornecedorSquema = mongoose.Schema({
    razao_social: {type: String, required: true},
    nome_fantasia: {type: String, required: true},
    cnpj: {type: String, required: true, index: {unique: true}},
    logradouro: {type: String, required: true},
    num_casa: {type: String, required: true},
    bairro: {type: String, required: true},
    complemento: {type: String, required: false},
    municipio: {type: String, required: true},
    uf: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}}
})

export default mongoose.model('Fornecedor', FornecedorSquema)