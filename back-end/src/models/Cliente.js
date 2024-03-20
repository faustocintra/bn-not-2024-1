import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automática no Mongoose
    nome: { type: String, required: true}, 
    cpf: { type: String, required: true, index: { unique: true } },
    data_nascimento: { type: Date, required: false},
    logradouro: { type: String, required: true },
    num_casa: { type: String, required: true },
    bairro: { type: String, required: true },
    complemento: { type: String, required: false },
    uf: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } }
})

/*
  Parâmetros de mongoose.model
  1° -> Nome do model (inicial maiúsculo)
  2° -> o esquema definido acima
  3° -> nome da collection no BD (inicial minúscula,
    plural)
*/

export default mongoose.model('Cliente', esquema, 'cliente')