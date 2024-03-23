import Cliente from '../models/Cliente.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    await Cliente.create(req.body)

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

controller.retriveAll = async function (req, res) {
  try {
    const result = await Cliente.find().sort({ neme: 'asc' })
    // HTTP 200: OK (implicito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retriveOne = async function(req, res) {
  try{
    const result = await Cliente.findById(req.params.id)
    // Documento não encontrado ~> HTTP 220: OK (implicito)
    if (result) res.send(result)
    // Documento encontrado ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try{
    const result = await Cliente.findByIdAndUpdate(req.params.id, req.body)
    // Documento encontrado e atualizado ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontratado (e não atualizado) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try{
    const result = await Cliente.findByIdAndDelete(req.params.id)
    // Documento encontrado e excluido ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não excluido) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

export default controller