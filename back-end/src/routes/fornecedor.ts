import { Router } from "express"
import { fornecedorController } from "../controllers/fornecedorController"

const fornecedorRouter = Router()

fornecedorRouter.post('/', fornecedorController.create)
fornecedorRouter.get('/', fornecedorController.retrieveAll)
fornecedorRouter.get('/:id', fornecedorController.retrieveOne)
fornecedorRouter.put('/:id', fornecedorController.update)
fornecedorRouter.delete('/:id', fornecedorController.delete)

export default fornecedorRouter