import prisma from '../database/client.js'

const controller = {} // objeto vazio

controller.create = async function(req, res){

    //quando usa await tem q usar async, assincrona

    try {
        await prisma.cliente.create ({data: req.body})
        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: Created
        req.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internet Server Error
        res.status(500), end()
    }
}

export default controller