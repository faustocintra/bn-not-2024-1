import Venda from '../models/Venda.js'

const controller = {}

controller.create = async function(req, res) {
    try {
        await Venda.create(req.body)

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
        const query = Venda.find().sort({descricao: 'asc'})
        if('pop_cliente' in req.query) query.populate('cliente')
        if('pop_produto' in req.query) query.populate('itens.produto')
        const result = await query.exec()
        res.send(result)
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.retrieveOne = async function(req, res){
    try{
        const query = Venda.findById(req.params.id)
        if('pop_cliente' in req.query) query.populate('cliente')
        if('pop_produto' in req.query) query.populate('itens.produto')
        const result = await query.exec()
        res.send(result)
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.update = async function(req, res){
    try{
        const result = await Venda.findByIdAndUpdate(req.params.id, req.body)
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
        const result = await Venda.findByIdAndDelete(req.params.id)
        if(result) res.send(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.createItem = async function(req, res){
    try{
        const venda = await Venda.findById(req.params.id)
        if (! venda) return res.status(404).end()
        venda.itens.push(req.body)
        venda.markModified('itens')
        await venda.save()
        return res.status(201).end()

    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.retrieveAllItems = async function(req, res){
    try{
        const venda = await Venda.findById(req.params.id)

        if (! venda) return res.status(404).end()
        else res.send(venda.itens)
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}
controller.retrieveOneItem = async function(req, res){
    try{
        const venda = await Venda.findById(req.params.id)

        if (! venda) return res.status(404).end()
        
        const item = venda.itens.id(req.params.itemId)
        if(item) res.send(item)
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).end()
    }
}

export default controller
