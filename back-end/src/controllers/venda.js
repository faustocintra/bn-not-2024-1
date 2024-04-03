import Venda from '../models/Venda.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    await Venda.create(req.body)

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

controller.retrieveAll = async function(req, res) {
  try {
    const query = Venda.find().sort({ num: 'asc' })

    // Verifica se o parâmetro 'pop_cliente' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_cliente' in req.query) query.populate('cliente')

    // Verifica se o parâmetro 'pop_produto' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_produto' in req.query) query.populate('itens.produto')

    const result = await query.exec()

    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {
    const query = Venda.findById(req.params.id)

    // Verifica se o parâmetro 'pop_cliente' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_cliente' in req.query) query.populate('cliente')

    // Verifica se o parâmetro 'pop_produto' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_produto' in req.query) query.populate('itens.produto')

    const result = await query.exec()

    // Documento encontrado ~> HTTP 200: OK (implícito)
    if(result) res.send(result)
    // Documento não encontrado ~> HTTP 404: Not Found
    else res.status(404).end()  
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    const result = await Venda.findByIdAndUpdate(req.params.id, req.body)
    // Documento encontrado e atualizado ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não atualizado) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    const result = await Venda.findByIdAndDelete(req.params.id)
    // Documento encontrado e excluído ~> HTTP 204: No Content
    if(result) resstatus(204).end()
    // Documento não encontrado (e não excluído) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}
controller.retrieveALLItems = async function(req, res) {
  try{
    //1) Procurando pela venda na qual moo novo item está inserido
    const venda = await Venda.findById(req.params.id)
     //2)Se a vendfa for enconmtrada, retorna http 404:  not found
    if (!venda) return res.status(404).end()
    // Senão, retorna o vetor venda.itens com http 200:ok (implícito)
   else res.send(venda.items)
  }
  catch(error){
    console.error(error)
    //HTTP 500: INternal Server Error
    res.status(500).end()
  }
}
controller.retrieveOneItem = async function(req, res) {
  try{
    //1) Procurando pela venda na qual moo novo item está inserido
    const venda = await Venda.findById(req.params.id)
     //2)Se a vendfa for enconmtrada, retorna http 404:  not found
    if (!venda) return res.status(404).end()
    //3) Procura o item específico dentor do vetor venda.itens
    const item = venda.itens.id(req.params.itemId)
    //4)Se o item não for encontrado, retorna http 404:  not found
  }
  
}
export default controller