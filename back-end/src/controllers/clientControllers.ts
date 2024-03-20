import { Request, Response } from "express"
import { ClienteModel, clientZodSchema } from "../models/Cliente"


const clientController = {
  create: async (req: Request, res: Response) => {

    const body = req.body
    const clientData = clientZodSchema.parse(body)
    const client = await ClienteModel.create(clientData)

    return res.status(201).json(client)
    
  }
}

export default clientController