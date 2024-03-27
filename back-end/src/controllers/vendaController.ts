import { Request, Response } from "express"
import { vendaModel, zodVendaSchema } from "../models/Venda"

export const vendaController = {
  create: async (req: Request, res: Response) => {
    const body = req.body
    const vendaData = zodVendaSchema.parse(body)
    const venda = await vendaModel.create(vendaData)

    return res.status(201).json(venda)
  },

  retrieveAll: async (req: Request, res: Response) => {
    const popCliente = req.query.pop_cliente
    const popItens = req.query.pop_itens
    const vendasQuery = vendaModel.find().sort({ data_venda: -1 })
    if (popCliente) {
      vendasQuery.populate('cliente')
    }
    if (popItens) {
      vendasQuery.populate('itens.produto')
    }
    return res.status(200).json(await vendasQuery)
  },

  retrieveOne: async (req: Request, res: Response) => {
    const id = req.params.id
    const popCliente = req.query.pop_cliente
    const popItens = req.query.pop_itens
    const vendaQuery = vendaModel.findById(id)
    if (popCliente) {
      vendaQuery.populate('cliente')
    }
    if (popItens) {
      vendaQuery.populate('itens.produto')
    }
    const venda = await vendaQuery
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }
    return res.status(200).json(venda)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    const vendaData = zodVendaSchema.partial().parse(body)
    const venda = await vendaModel.updateOne({ _id: id }, vendaData)

    return res.status(200).json(venda)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const venda = await vendaModel.deleteOne({ _id: id })
    if (venda.deletedCount === 0) {
      return res.status(404).json({ message: "venda not found" })
    }

    return res.status(204).send()
  }
}