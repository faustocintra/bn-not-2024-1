import mongoose from "mongoose"
import { z } from "zod"

export const zodVendaSchema = z.object({
  _id: z.string().optional(),
  num: z.number(),
  data_venda: z.union([z.string(), z.date()]),
  cliente: z.string(),
  itens: z.array(z.object({
    _id: z.string().optional(),
    num_item: z.number(),
    quantidade: z.number(),
    produto: z.string()
  }))
})

export type Venda = z.infer<typeof zodVendaSchema>

const venda: Venda = {
  cliente: '',
  data_venda: new Date(),
  itens: [
    {
      num_item: 1,
      produto: '',
      quantidade: 10
    },
    {
      num_item: 1,
      produto: '',
      quantidade: 10
    }
  ],
  num: 1
}
const vendaSchema = new mongoose.Schema({
  num: {
    type: Number,
    required: true
  },
  data_venda: {
    type: Date,
    required: true,
    default: Date.now
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  itens: [{
    num_item: {
      type: Number,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    },
    produto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produto',
      required: true
    },
  }]
})

export const vendaModel = mongoose.model('Venda', vendaSchema, 'vendas')