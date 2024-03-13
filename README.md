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
