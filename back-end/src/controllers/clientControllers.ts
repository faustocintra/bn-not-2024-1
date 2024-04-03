import { Request, Response } from "express"
import { ClienteModel, clientZodSchema } from "../models/Cliente"


const clientController = {

  create: async (req: Request, res: Response) => {
    const body = req.body
    const clientData = clientZodSchema.parse(body)
    const client = await ClienteModel.create(clientData)

    return res.status(201).json(client) 
  },

  retrieveAll: async (req: Request, res: Response) => {
    const clients = await ClienteModel.find().sort({ nome: 'asc' })
    return res.status(200).json(clients)
  },

  retrieveOne: async (req: Request, res: Response) => {
    const id = req.params.id
    const client = await ClienteModel.findById(id)
    if (!client) {
      return res.status(404).json({ message: "Client not found" })
    }
    return res.status(200).json(client)
  },

  update: async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    const clientData = clientZodSchema.partial().parse(body)
    const client = await ClienteModel.updateOne({ _id: id }, clientData)

    return res.status(200).json(client)
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id
    const client = await ClienteModel.deleteOne({ _id: id })
    if (client.deletedCount === 0) {
      return res.status(404).json({ message: "Client not found" })
    }

    return res.status(204).send()
  }
}

export default clientController