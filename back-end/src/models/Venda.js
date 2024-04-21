import mongoose from 'mongoose'

const esquema = mongoose.Schema({
  // _id é automático no Mongoose
  num: { type: Number, required: true },
  data_venda: { type: Date, required: true },
  cliente: {
    type: mongoose.ObjectId,
    ref: 'Cliente',   // Nome do model referenciado
    required: true
  },
  // Itens da venda como subdocumentos
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


export default mongoose.model('Venda', esquema, 'vendas')