import { Router } from 'express'
import controller from '../controllers/venda.js'

const vendaRouter = Router()

vendaRouter.post('/', controller.create)
vendaRouter.get('/', controller.retrieveAll)
vendaRouter.get('/:id', controller.retrieveOne)
vendaRouter.put('/:id', controller.update)
vendaRouter.delete('/:id', controller.delete)
vendaRouter.post('/:id/itens', controller.createItem)
vendaRouter.get('/:id/itens', controller.retrieveAllItems)
vendaRouter.get('/:id/itens/:itemId', controller.retrieveOneItem)

export default vendaRouter