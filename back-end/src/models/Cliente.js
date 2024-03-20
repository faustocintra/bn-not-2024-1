import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    nome: {type: String, require: true},
    cpf: {type: String, require: true, index: {unique: true}},
    data_nascimento: {type: Date, require: false},
    logradouro: {type: String, require: true},
    num_casa: {type: String, require: true},
    bairro: {type: String, require: true},
    complemento: {type: String, require: false},
    cep: {type: String, require: true},
    municipio: {type: String, require: true},
    uf: {type: String, require: true},
    telefone: {type: String, require: true},
    email: {type: String, require: true, index: {unique: true}}
})

/*
    Parametros de mongoose.model    
    1º: nome do model (inicial maiuscula)
    2º: esquema definido acima
    3º: nome da collection no BD (inicial minuscula, plural)
*/

export default mongoose.model("Cliente", esquema, "cliente");