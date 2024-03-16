import prisma from "../database/client.js";

const controller = {}; // Objeto vazio

controller.create = async function(req, res) { //Só pode usar awai em uma função async
    try {
        await prisma.cliente.create({ data: req.body }) //await vai executar a linha de baixo quando obter uma resposta da entidade externa, nesse caso, nosso banco

        // Envia uma resposta de sucesso ao front-end
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }

}

export default controller