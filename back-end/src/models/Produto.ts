import mongoose from "mongoose"
import { z } from "zod"

export const productZodSchema = z.object({
  _id: z.instanceof(mongoose.Types.ObjectId).optional(),
  descricao: z.string(),
  unidade_medida: z.string(),
  qtd: z.number(),
  valor_unitario: z.number(),
  fornecedor: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)])
})

export type Product = z.infer<typeof productZodSchema>

const productSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true
  },
  unidade_medida: {
    type: String,
    required: true
  },
  qtd: {
    type: Number,
    required: true
  },
  valor_unitario: {
    type: Number,
    required: true
  },
  fornecedor: {
    type: mongoose.Types.ObjectId,
    ref: "Fornecedor",
    required: true
  }
})


export const productModel = mongoose.model("Produto", productSchema, 'produtos')