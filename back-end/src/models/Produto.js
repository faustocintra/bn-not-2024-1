import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    descricao: { type: String, required: true},
    unidade_medida: { type: String, required: true},
    quantidade: {type: Number, required: true },
    valor_unitario: {type: Number, required: true},
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor', // Nome do Model referenciado
        required: true
    },
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Produto',esquema, 'produtos')