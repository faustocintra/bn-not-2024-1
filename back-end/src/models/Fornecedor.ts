import mongoose from "mongoose"
import { z } from "zod"

export const fornecedorZodSchema = z.object({
    _id: z.instanceof(mongoose.Types.ObjectId).optional(),
    razao_social: z.string(),
    nome_fantasia: z.string(),
    cnpj: z.string(),
    logradouro: z.string(),
    num_casa: z.string(),
    bairro: z.string(),
    complemento: z.string().optional(),
    municipio: z.string(),
    uf: z.string().length(2),
    telefone: z.string(),
    email: z.string().email()
})

export type Fornecedor = z.infer<typeof fornecedorZodSchema>

const fornecedorSchema = new mongoose.Schema<Fornecedor>({
    razao_social: String,
    nome_fantasia: String,
    cnpj: { type: String, unique: true },
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

export const FornecedorModel = mongoose.model<Fornecedor>('Fornecedor', fornecedorSchema)