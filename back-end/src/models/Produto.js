import mongoose from "mongoose";

const ProdutoSquema = mongoose.Schema({
    descricao: {type: String, required: true},
    unidade_medida: {type: String, required: true},
    quantidade: {type: Number, required: true},
    valor_unitario: {type: Number, required: true},
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor',  //nome do model referenciado
        required: true
    }
})

export default mongoose.model('Produto', ProdutoSquema, 'produtos')