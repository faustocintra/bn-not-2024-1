import { Router } from "express"
import clientController from "../controllers/clientControllers"

const clientRouter = Router()

clientRouter.post("/", clientController.create)
clientRouter.get("/", clientController.retrieveAll)
clientRouter.get("/:id", clientController.retrieveOne)
clientRouter.put("/:id", clientController.update)
clientRouter.delete("/:id", clientController.delete)
export default clientRouter