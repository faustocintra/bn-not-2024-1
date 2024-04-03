import { Router } from 'express'
import controller from '../controllers/venda.js'

const router = Router()

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

router.post('/:id/itens', controller.createItem)
router.get('/:id/itens', controller.retrieveAllItems)
router.get('/:id/itens/:itemId', controller.retrieveOneItem)

export default router