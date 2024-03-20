import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // Id é automático no mongoose
nome: { type: String, required: true },
cpf: { type: String, required: true, index: { unique: true } },
data_nascimento: { type: Date, required: false },
logradouro: { type: String, required: true },
nome: { type: String, required: true },
num_casa: { type: String, required: true },
complemento: { type: String, required: false },
municipio: { type: String, required: true },
uf: { type: String, required: true },
telefone: { type: String, required: true },
email: { type: String, required: true, index: {unique: true} }
})

/*
Parametros de mongoose.model
1º Nome do model (inicial maiscula)
2º o esquema definido acima
3º nome do collection no BD (inicio) minusculo, plural
*/

export default mongoose.model('Cliente', esquema, 'clientes')