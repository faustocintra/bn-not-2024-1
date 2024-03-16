import { Router } from "express"
import prisma from "../database/client"

const clientRouter = Router()

clientRouter.post("/", async (req, res) => {
  try {
    const result = await prisma.cliente.create({
      data: req.body
    })
    return res.status(201).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Error creating client" })
  }
})

export default clientRouter
