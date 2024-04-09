import { Request, Response } from "express"
import { z } from "zod"
import { vendaModel, zodVendaSchema } from "../models/Venda"

export const vendaController = {
  create: async (req: Request, res: Response) => {
    const body = req.body
    const vendaData = zodVendaSchema.parse(body)
    const venda = await vendaModel.create(vendaData)

    return res.status(201).json(venda)
  },

  createItem: async (req: Request, res: Response) => {
    const schema = z.object({
      num_item: z.number(),
      quantidade: z.number(),
      produto: z.string()
    })

    const item = schema.parse(req.body)
    const venda = await vendaModel.findById(req.params.id)

    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }

    venda.itens.push(item)
    venda.markModified('itens')

    await venda.save()

    return res.status(201).json(venda)
  },

  retrieveAll: async (req: Request, res: Response) => {
    const popCliente = req.query.pop_cliente
    const popProduto = req.query.pop_produto
    const vendasQuery = vendaModel.find().sort({ data_venda: -1 })
    if (popCliente) {
      vendasQuery.populate('cliente')
    }
    if (popProduto) {
      vendasQuery.populate('itens.produto')
    }
    return res.status(200).json(await vendasQuery)
  },

  retrieveAllItems: async (req: Request, res: Response) => {
    const popProduto = req.query.pop_produto
    const vendaId= req.params.id
    const vendaQuery = vendaModel.findById(vendaId)
    if (popProduto) {
      vendaQuery.populate('itens.produto')
    }
    const venda = await vendaQuery
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }
    return res.status(200).json(venda.itens)
  },

  retrieveOne: async (req: Request, res: Response) => {
    const id = req.params.id
    const popCliente = req.query.pop_cliente
    const popProduto = req.query.pop_produto
    const vendaQuery = vendaModel.findById(id)
    if (popCliente) {
      vendaQuery.populate('cliente')
    }
    if (popProduto) {
      vendaQuery.populate('itens.produto')
    }
    const venda = await vendaQuery
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }
    return res.status(200).json(venda)
  },

  retrieveOneItem: async (req: Request, res: Response) => {
    const vendaId = req.params.id
    const itemNum = req.params.itemId
    const popProduto = req.query.pop_produto
    const vendaQuery = vendaModel.findById(vendaId)
    if (popProduto) {
      vendaQuery.populate('itens.produto')
    }
    const venda = await vendaQuery
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }
    const item = venda.itens.find((i) => i.num_item === +itemNum)
    if (!item) {
      return res.status(404).json({ message: "item not found" })
    }
    return res.status(200).json(item)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    const vendaData = zodVendaSchema.partial().parse(body)
    await vendaModel.updateOne({ _id: id }, vendaData)

    return res.sendStatus(204)
  },

  updateItem: async (req: Request, res: Response) => {
    const zodBodySchema = z.object({
      num_item: z.number(),
      quantidade: z.number(),
      produto: z.string()
    }).partial()

    const body = zodBodySchema.parse(req.body)
    
    const vendaId = req.params.id
    const itemId = req.params.itemId
    
    const venda = await vendaModel.findById(vendaId)
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }
    console.log(venda)
    const item = venda.itens.id(itemId)
    if (!item) {
      return res.status(404).json({ message: "item not found" })
    }
    for(const [field, value] of Object.entries(body)) {
      // @ts-ignore
      item[field] = value
      venda.markModified('itens')
    }

    await venda.save()
    return res.sendStatus(204)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const venda = await vendaModel.deleteOne({ _id: id })
    if (venda.deletedCount === 0) {
      return res.status(404).json({ message: "venda not found" })
    }

    return res.status(204).send()
  },

  deleteItem: async (req: Request, res: Response) => {
    const vendaId = req.params.id
    const itemId = req.params.itemId
    const venda = await vendaModel.findById(vendaId)
    if (!venda) {
      return res.status(404).json({ message: "venda not found" })
    }

    const item = venda.itens.id(itemId)
    if (!item) {
      return res.status(404).json({ message: "item not found" })
    }

    venda.itens.remove(item)
    await venda.save()

    return res.status(204).send()
  }
}