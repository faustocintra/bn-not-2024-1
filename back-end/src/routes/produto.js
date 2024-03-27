import { Router } from 'express'
import controller from '../controllers/produto.js'

const produtoRouter = Router()

produtoRouter.post('/', controller.create)
produtoRouter.get('/', controller.retrieveAll)
produtoRouter.get('/:id', controller.retrieveOne)
produtoRouter.put('/:id', controller.update)
produtoRouter.delete('/:id', controller.delete)

export default produtoRouter