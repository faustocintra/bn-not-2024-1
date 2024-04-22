
import Produto from '../models/Produto.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    await Produto.create(req.body)

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

controller.retrieveAll = async function(req, res){
  try {
    const query = Produto.find().sort({ descricao: 'asc'})
    //verifica se o parãmetro 'pop_fornecedor' foi passado na url
    //e, em caso positivo, acrescenta o populate() á consulta
    if('pop_fornecedor' in req.query) query.populate('fornecedor')
    const result = await query.exec()
    //http 200: ok (implícito)
    res.send(result)
  }
  catch(error){
    console.error(error)
    //http 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try{
    const query = Produto.findById(req.params.id)
    //verifica se o parãmetro 'pop_fornecedor' foi passado na url
    //e, em caso positivo, acrescenta o populate() á consulta
    if('pop_fornecedor' in req.query) query.populate('fornecedor')
    const result = await query.exec()

    if(result) res.send(result)
    //Documento não encontrado ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error){
    console.error(error)
    //HTTP 500: INternal Server Error
    res.status(500).end()
  }
}

controller.update = async function(req, res){
  try{
    const result = await Produto.findByIdAndUpdate(req.params.id, req.body)
    //Documento encontrado e atualizado ~> HTTP 204: No Content
    if(result) res.status(204).end()
    //Documento não encontrado (e não atualizado) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error){
    console.error(error)
    //HTTP 500: INternal Server Error
    res.status(500).end()
  }
}

controller.delete = async function(req, res){
  try{
    const result = await Produto.findByIdAndDelete(req.params.id)
    //Documento encontrado e excluído ~> HTTP 204: No Content
    if(result) res.status(204).end()
    //Documento não encontrado (e não excluído) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error){
    console.error(error)
    //HTTP 500: INternal Server Error
    res.status(500).end()
  }
}
export default controller