import { Router } from "express"
import clientController from "../controllers/clientControllers"

const clientRouter = Router()

clientRouter.post("/", clientController.create)

export default clientRouter