import mongoose from 'mongoose'
//_id é automático no mongoose
const esquema = mongoose.Schema({
    num: {type: Number, required:true},
    data_venda: {type: Date, required: true},
    cliente: {
        type: mongoose.ObjectId, 
        ref: 'Cliente', //nome do model referenciado
        required: true
    },
    //Itens da venda como subdocumentos
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
/*
Parâmertros de mongoose.model
    1° ~>Nome do Model (inicial maiúscula)
    2° ~>O esquema definido acima
    3° ~>nome da collection no banco de dados (inicial maiúscula)
*/

export default mongoose.model('Venda', esquema, 'vendas')