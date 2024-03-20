import Cliente from '../models/cliente.js'

const controller = {} // objeto vazio

controller.create = async function(req, res){

    //quando usa await tem q usar async, assincrona

    try {
        await Cliente.create (req.body)
        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internet Server Error
        res.status(500). end()
    }
}

export default controller