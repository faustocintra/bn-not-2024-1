
import mongoose from 'mongoose'
import { z } from 'zod'

const clienteSchema = new mongoose.Schema({
  nome: String,
  cpf: {type: String, unique: true},
  data_nascimento: Date,
  logradouro: String,
  num_casa: String,
  bairro: String,
  complemento: String,
  municipio: String,
  uf: String,
  telefone: String,
  email: {
    type: String,
    unique: true
  }
})

export const clientZodSchema = z.object({
  _id: z.instanceof(mongoose.Types.ObjectId).optional(),
  nome: z.string(),
  cpf: z.string(),
  data_nascimento: z.union([z.string(), z.date()]).optional(),
  logradouro: z.string(),
  num_casa: z.string(),
  bairro: z.string(),
  complemento: z.string().optional(),
  municipio: z.string(),
  uf: z.string().length(2),
  telefone: z.string(),
  email: z.string().email()
})

export type Cliente = z.infer<typeof clientZodSchema>

export const ClienteModel = mongoose.model('Cliente', clienteSchema, 'clientes')