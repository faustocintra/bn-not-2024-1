import Fornecedor from '../models/Fornecedor.js'

const controller = {}  // Objeto vazio

controller.create = async function(req, res) {
    try {
        await Fornecedor.create(req.body)

        // Envia uma resposta de sucesso ao front-end
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

//exibe todos os arquivos e em ordem alfabética
controller.retrieveAll = async function(req, res){
    try{
    const result = await Fornecedor.find().sort({nome: 'asc'})//http 200: ok (implícito)
   res.send(result)
    }
   catch(error) {
    console.error(error)
   // HTTP 500: Internal Server Error
   res.status(500).end()
    }
   }
   //exibe apenas um arquivo
   controller.retrieveOne = async function (req, res){
    try{
    const result = await Fornecedor.findById(req.params.id)
    //documento encontrato -> http 200: ok (implicito)
    if(result) res.send(result)
   //documento não encontrado -> http 404: not found
   else res.status(404).and()
    }
   catch(error) {
    console.error(error)
   // HTTP 500: Internal Server Error
   res.status(500).end()
    }
   }
   //atualizar um arquivo
   controller.update = async function(req, res){
    try{
    const result = await Fornecedor.findByIdAndUpdate(req.params.id, req.body)
   //documento encontrado e atualizado -> http 204: no content
   if(result) res.status(204).end()
   //documento não encontrado (e não atualizado) -> http 404: not found
   else res.status(404).and()
    }
   catch(error) {
    console.error(error)
   // HTTP 500: Internal Server Error
   res.status(500).end()
    }
   }
   //para excluir um arquivo
   controller.delete = async function(req, res){
   try{
   const result = await Fornecedor.findByIdAndDelete(req.params.id)
    //documento encontrado e excluído -> http 204: No content
    if(result) res.status(204).end()
    //documento não encontrado (e não excluído) -> http 404: not found
    else res.status(404).end()
    }
    catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
    }
}

export default controller