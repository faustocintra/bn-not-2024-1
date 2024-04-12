import cliente from '../Models/Cliente.js'

const controller = {}; // objeto vazio

controller.create = async (req, res) => {
    try{
        await cliente.create(req.body)

        //envia uma resposta de sucesso para o frontend
        // HTTP 201 = criado
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500 = erro interno do servidor
        res.status(500).end()
    }
controller.retrieveAll = async (req, res) => {
    try{
        const result = await Cliente.find().sort({nome: 'asc'})
        // HTTP 200 = OK
        res.send(result)
    }
    catch(error){
        console.error(error)
        // HTTP 500 = erro interno do servidor
        res.status(500).end()
        }
    }
    controller.retrieveOne = async (req, res) => {
        try{
            const result = await cliente.findById(req.params.id)
            // HTTP 200 = OK => Documento enocontrado
            if(result) res.send(result)
            // HTTP 404 = Nao encontrado
            else res.status(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500 = erro interno do servidor
            res.status(500).end()
        }
    }
    controller.update = async (req, res) => {
        try{
            const result = await Cliente.findByIdAndUpdate(req.params.id, req.body)
            // HTTP 200 = OK => Documento encontrado e atualizado
            if(result) res.status(204).end()
            // HTTP 404 = Nao encontrado
            else res.status(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500 = erro interno do servidor
            res.status(500).end()
        }
    }
    controller.delete = async (req, res) => {
        try{
            const result = await cliente.findByIdAndDelete(req.params.id)
            // HTTP 200 = OK => Documento encontrado e excluido
            if(result) res.status(204).end()
            // HTTP 404 = Nao encontrado
            else res.status(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500 = erro interno do servidor
            res.status(500).end()
        }
    }
}
export default controller