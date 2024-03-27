import { Router } from "express"
import productController from "../controllers/produtoController"

const productRouter = Router()

productRouter.post('/', productController.create)
productRouter.get('/', productController.retrieveAll)
productRouter.get('/:id', productController.retrieveOne)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.delete)

export default productRouter