import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    //_id é automatico no Mongoose
    descricao: { type: String, required: true},
    unidade_medida: {type: String, required: true},
    quantidade: {type: Number, required: true},
    valor_unitario: {type: Number, required: true},
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor', //nome do model referenciado
        required: true
    }
})
/* 
    Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiúscula)
    2° ~> o esquema definido acima
    3° ~> no da colection no BD (inicial minúscula, plural)
*/


export default mongoose.model('Produto', esquema, 'produtos')