import { Request, Response } from "express"
import { ClienteModel, clientZodSchema } from "../models/Cliente"
import { ZodError } from "zod"


const clientController = {
  create: async (req: Request, res: Response) => {
    try {
      const body = req.body
      const clientData = clientZodSchema.parse(body)
      const client = await ClienteModel.create(clientData)
  
      return res.status(201).json(client)
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.errors })
      }

      return res.status(500).json({ message: error.message })
    }
  }
}

export default clientController