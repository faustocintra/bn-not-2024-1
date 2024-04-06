CRIAÇÃO DO PROJETO BACK-END
npx @aka-demy/create-express-app

** RESPOSTAS DE PERGUNTAS:
Install package: Y
Give a name for the app: Back-end
Choose a language: JavaScript
Choose a template engine: None
Choose a package manager: npm

** MUDANDO PARA A PASTA DO PROJETO:
cd back-end

** INSTALANDO PRISMA
npm install prisma --save-dev

** INICIALIZANDO PRISMA COM CONECTOR PARA MONGODB
npx prisma init --datasource-provider mongodb

** INSTALAR EXTENSÃO PRISMA

** INSTALAR PRISMA CLIENT
npm install @prisma/client

** GERANDO O CLIENT PERSONALIZADO DO PRISMA PARA O PROJETO
npx prisma generate
ESTE COMANDO PRECISA SER EXECUTADO SEMPRE QUE HOUVER ALTERAÇÕES NO ARQUIVO:
PRISMA/PRISMA.SCHEMA

criar pasta e arquivo: src/database/client.js
criar pasta e arquivo: src/controllers/client.js
criar arquivo: src/routes/client.js

DESINSTALAR PRISMA
npm uninstall prisma --save-dev
npm uninstall @prisma/client
apagar pasta database e prisma

INSTALAR O MONGOOSE
npm install mongoose
npm install dotenv

no app.JS:
import dotenv from 'dotenv'
dotenv.config() 
// Carrega as variaveis de arquivo .env
// no objeto global process .env

---------------------------------------
thunder Client > new request > body
{
"nome": "Tertuliano Teles Taveira",
"cpf": "123.456.789-01",
"data_nascimento": "1975-05-29T00:00:00Z",
"logradouro": "Rua do Sobe e Desce",
"num_casa": "1366",
"bairro": "Vila Vintém",
"municipio":"Morro Alto de Cima",
"uf":"MG",
"telefone":"(36) 98765-4321",
"email":"tertuliano@queijobao.com.br"
}
---------------------------------------
metodo GET
usar o ID na frente do endereço:
exemplo: http://localhost:8080/clientes65fe0c7f9357892f6a733ca1
recebe o codigo 200, deu certo
---------------------------------------
metodo PUT
usar o ID na frente do endereço:
exemplo: http://localhost:8080/clientes65fe0c7f9357892f6a733ca1
alterar os dados, exemplo:
{
    "complemento: 
    "bairro
}
SEND
recebe o 204 no content, deu certo
CONFERE no GET se alterou os dados.
---------------------------------------
metodo DELETE (não pede confirmação, deleta direto)
usar o ID na frente do endereço:
exemplo: http://localhost:8080/clientes65fe0c7f9357892f6a733ca1

/// CADASTRO DE CLIENTE
  {
    "nome": "Armelinda Almeida Alves",
    "cpf": "987.654.321-09",
    "data_nascimento": "1976-11-27T00:00:00Z",
    "logradouro": "Rua Voluntarios da Franca",
    "num_casa": "2560",
    "bairro": "Centro",
    "complemento": "Ap,23 Bl.03",
    "municipio": "Franca",
    "uf": "SP",
    "telefone": "(16) 99999-8888",
    "email": "armelinda@basquete.com.br",
    "__v": 0
  }
  {
    "nome": "Tertuliano TeLes Taveira",
    "cpf": "123.456.789-01",
    "data_nascimento": "1975-05-29T00:00:00Z",
    "logradouro": "Rua do Sobe e Desce",
    "num_casa": "1366",
    "bairro": "Vila Vintém",
    "municipio": "Morro Alto de Cima",
    "uf": "MG",
    "telefone": "(36) 98765-4321",
    "email": "tertuliano@queijobao.com.br",
    "__v": 0
  }

/// CADASTRO DE FORNECEDOR

{
   "razao_social":"Empresa KIDOÇURA S/A",
    "nome_fantasia":"Kidoçura",
    "cnpj":"111111111111/0001-11",
    "logradouro": "Rua das Capivaras",
    "num_casa": "223",
    "bairro": "Bairoo 333",
   "complemento":"casa",
    "municipio": "Franca",
    "uf": "SP",
    "telefone":"676",
    "email":"joao@gmail.com"
}

/// CADASTRO DE PRODUTO

{
    "descricao": "Doce de Leite Kidoçura",
    "unidade_medida": "g",
    "quantidade": 700,
    "valor_unitario": 10.74,
    "fornecedor": "6604a4243cdd99223acf2902"
}

/// CADASTRO DE VENDA

{
    "num_venda": "202400002",
    "data_venda": "2024-04-03T19:13:00Z",
    "cliente": "65fecd990fabf9b9ccd9562a",
    "itens": [
        {
            "num_item": 1,
            "produto": "6604a4df3cdd99223acf2905",
            "quantidade": 2
        },
        {
            "num_item": 2,
            "produto": "6611484a78160b78685386b0",
            "quantidade": 3
        }
    ]
}

/// EXEMPLO CONSULTA POPULATE
método GET
http://localhost:8080/vendas?pop_produto&pop_cliente


/// ADICIONANDO ITEM A VENDA:
método POST
http://localhost:8080/vendas/ id da venda / items
{
    "num_item": 2,
    "produto": " ID DO PRODUTO ",
    "quantidade": 2
}

/// CONSULTANDO ITENS DA VENDA:
método GET
http://localhost:8080/vendas/ id da venda / items

/// CONSULTANDO ITEM ESPECIFICO DA VENDA:
método GET
http://localhost:8080/vendas/ id da venda / items / ID DO ITEM

/// UPDATE ITEM DE VENDA ESPECIFICA
método PUT
http://localhost:8080/vendas/ id da venda / items / ID DO ITEM
{
  "num_item": 10,
  "quantidade": 15
}

FINALIZAR TRABALHO:
DEPOIS DOS COMMITS E PRINTS:
ABRIR PULL REQUEST
COLOCAR NOME NOS COMENTÁRIOS

