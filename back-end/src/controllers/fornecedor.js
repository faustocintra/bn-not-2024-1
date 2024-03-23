import Fornecedor from '../models/Fornecedor.js'

const controller = {}

controller.create = async function(req, res) {
    try {
        await Fornecedor.create(req.body)

        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveAll = async function(req, res){
    try{
        const result = await Fornecedor.find().sort({nome: 'asc'})
        res.send(result)
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.retrieveOne = async function(req, res){
    try{
        const result = await Fornecedor.findById(req.params.id)
        if(result) res.send(result)

        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.update = async function(req, res){
    try{
        const result = await Fornecedor.findByIdAndUpdate(req.params.id, req.body)
        if(result) res.send(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.delete = async function(req, res){
    try{
        const result = await Fornecedor.findByIdAndDelete(req.params.id)
        if(result) res.send(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
export default controller

