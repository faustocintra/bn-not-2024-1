import Cliente from "../models/Cliente"

const controller = {} //objeto vazio

controller.create = async function(req, res) {
    try {
        await Cliente.create(req.body)

        res.status(201).end()
    }
    catch (err) {
        console.log(err);
        res.status(500).end()
        }
}

export default controller