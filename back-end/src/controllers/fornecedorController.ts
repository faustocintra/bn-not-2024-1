import { Request, Response } from "express"
import { FornecedorModel, fornecedorZodSchema } from "../models/Fornecedor"


export const fornecedorController = {
  async create(req: Request, res: Response) {
    const body = req.body
    const fornecedorData = fornecedorZodSchema.parse(body)
    const fornecedor = await FornecedorModel.create(fornecedorData)

    return res.status(201).json(fornecedor)
  },

  async retrieveAll(req: Request, res: Response) {
    const fornecedores = await FornecedorModel.find()
    return res.status(200).json(fornecedores)
  },

  async retrieveOne(req: Request, res: Response) {
    const id = req.params.id
    const fornecedor = await FornecedorModel.findById(id)
    if (!fornecedor) {
      return res.status(404).json({ message: "Fornecedor not found" })
    }
    return res.status(200).json(fornecedor)
  },

  async update(req: Request, res: Response) {
    const id = req.params.id
    const body = req.body
    const fornecedorData = fornecedorZodSchema.partial().parse(body)
    const fornecedor = await FornecedorModel.updateOne({ _id: id }, fornecedorData)

    return res.status(200).json(fornecedor)
  },

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const fornecedor = await FornecedorModel.deleteOne({ _id: id }).sort({ razao_social: 'asc' })
    if (fornecedor.deletedCount === 0) {
      return res.status(404).json({ message: "Fornecedor not found" })
    }

    return res.status(204).send()
  }
}