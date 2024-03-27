import { Request, Response } from "express"
import { productModel, productZodSchema } from "../models/Produto"


const productController = {

  create: async (req: Request, res: Response) => {
    const body = req.body
    const productData = productZodSchema.parse(body)
    const product = await productModel.create(productData)

    return res.status(201).json(product) 
  },

  retrieveAll: async (req: Request, res: Response) => {
    const popFornecedor = req.query.pop_fornecedor
    const productsQuery = productModel.find().sort({ descricao: 1 })
    if (popFornecedor) {
      productsQuery.populate('fornecedor')
    }
    return res.status(200).json(await productsQuery)
  },

  retrieveOne: async (req: Request, res: Response) => {
    const id = req.params.id
    const popFornecedor = req.query.pop_fornecedor
    const productQuery = productModel.findById(id)
    if (popFornecedor) {
      productQuery.populate('fornecedor')
    }
    const product = await productQuery
    if (!product) {
      return res.status(404).json({ message: "product not found" })
    }
    return res.status(200).json(product)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    const productData = productZodSchema.partial().parse(body)
    const product = await productModel.updateOne({ _id: id }, productData)

    return res.status(200).json(product)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await productModel.deleteOne({ _id: id })
    if (product.deletedCount === 0) {
      return res.status(404).json({ message: "product not found" })
    }

    return res.status(204).send()
  }
}

export default productController