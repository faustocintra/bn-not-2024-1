import { Router } from "express"
import { vendaController } from "../controllers/vendaController"

const vendasRouter = Router()

vendasRouter.post('/', vendaController.create)
vendasRouter.get('/', vendaController.retrieveAll)
vendasRouter.get('/:id', vendaController.retrieveOne)
vendasRouter.put('/:id', vendaController.update)
vendasRouter.delete('/:id', vendaController.delete)

vendasRouter.post('/:id/itens', vendaController.createItem)
vendasRouter.get('/:id/itens', vendaController.retrieveAllItems)
vendasRouter.get('/:id/itens/:itemId', vendaController.retrieveOneItem)
vendasRouter.put('/:id/itens/:itemId', vendaController.updateItem)
vendasRouter.delete('/:id/itens/:itemId', vendaController.deleteItem)

export default vendasRouter