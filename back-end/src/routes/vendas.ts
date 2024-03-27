import { Router } from "express"
import { vendaController } from "../controllers/vendaController"

const vendasRouter = Router()

vendasRouter.post('/', vendaController.create)
vendasRouter.get('/', vendaController.retrieveAll)
vendasRouter.get('/:id', vendaController.retrieveOne)
vendasRouter.put('/:id', vendaController.update)
vendasRouter.delete('/:id', vendaController.delete)

export default vendasRouter