import { Router } from 'express'
import controller from '../controllers/fornecedor.js'

const fornecedorRouter = Router()

fornecedorRouter.post('/', controller.create)
fornecedorRouter.get('/', controller.retrieveAll)
fornecedorRouter.get('/:id', controller.retrieveOne)
fornecedorRouter.put('/:id', controller.update)
fornecedorRouter.delete('/:id', controller.delete)

export default fornecedorRouter