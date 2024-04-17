import { Router } from 'express'
import controller from '../controllers/venda.js'


const router = Router()

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

router.post('/:id/itens', controller.createItem) //Rota para Criar item
router.get('/:id/itens', controller.retrieveAllItems) // Rota para recuperar (consultar)
router.get('/:id/itens/:itemId', controller.retrieveOneItem) // Rota consulta um
router.put('/:id/itens/:itemId', controller.updateItem) // Rota atualizar
router.delete('/:id/itens/:itemId', controller.deleteItem) // Rota apagar ou remover

export default router
