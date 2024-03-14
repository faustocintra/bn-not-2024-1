# Criação do projeto back-end
npx @aka-demy/create-express-app

Respostas às perguntas:
* Install package...? y
* Give a name for the app: back-end
* Choose a language: JavaScript
* Choose a template engine: None
* Choose a package manager: npm

# Mudando para a pasta do projeto
cd back-end

# Gerando o cliente personalizado do Prisma para o projeto
npx prisma generate
* Este comando precisa ser executado sempre que houver alterações no arquivo prisma/schema.prisma

# Instalando o Prisma como dependência de desenvolvimento
npm install prisma --save-dev
* Instale também a extensão Prisma no VS Code

# Inicializando o Prisma com conector para MongoDB
npx prisma init --datasource-provider mongodb

# Adicionando o Prisma Client ao projeto
npm install @prisma/client