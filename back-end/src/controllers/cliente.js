import Cliente from '../models/Cliente.js'

const controller = {} // Objeto vazio

controller.create = async function (req, res) {
    try {
        await Cliente.create(req.body)

        //Envia uma resposta de sucesso do front-end
        //HTTP 201: Created
        res.status(201).end()
    }
    catch (error) {
        console.error(error)
        //HTTP 500: INTERNAL SERVER ERROR
        res.status(500).end()
    }
}

export default controller