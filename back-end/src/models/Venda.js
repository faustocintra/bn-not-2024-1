import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    num_venda: {type: Number, required: true},
    data_venda: {type: Date, required: true},
    cliente: {
        type: mongoose.ObjectId,
        ref: 'Cliente', // Nome do Model referenciado
        required: true
    },
    itens: [{
        num_item: { type: Number, required: true },
        produto: {
            type: mongoose.ObjectId,
            ref: 'Produto',
            required: true
        },
        quantidade: { type: Number, required: true}
    }]
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Venda',esquema, 'vendas')
