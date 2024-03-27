import mongoose from "mongoose";

const VendaSquema = mongoose.Schema({
    num: {type: Number, required: true},
    data_venda: {type: Date, required: true},
    cliente: {
        type: mongoose.ObjectId,
        ref: 'Cliente',
        required: true
    },
    itens: [{
        num_item: {type: Number, required: true},
        produto: {
            type: mongoose.ObjectId,
            ref: 'Produto',
            required: true
        },
        quantidade: {type: Number, required: true}
    }]
})

export default mongoose.model('Venda', VendaSquema, 'vendas')