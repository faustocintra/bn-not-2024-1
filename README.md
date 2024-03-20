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
