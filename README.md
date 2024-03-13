# bn-not-2024-1
Repositório da disciplina Banco de Dados - Não Relacional, 3º semestre DSM Fatec Franca 2024/1

# Criação do projeto back-end
npx @aka-demy/creat-express-app

Respostas às perguntas:
* Install package...? y
* Give a name for a app: back-end
* Choose a language: JavaScript
* choose a template engine: None
* Choose a package maneger: npm

# Mudando para a psta do projeto
cd back-end

# Instalando o Prisma como dependência de desenvolvimento
npm install prisma --save-dev

# Gerando o cliente personalizado do Prisma para o projeto
mpx prisma generate
* Este comando precisa ser executado sempre que houver alteração
no arquivo prisma/schema.prisma

# Inicializando o Prisma com conector para MongoDb
npx prisma init --datasource-provider mongodb

# Adicionar o Prisma Cliente ao projeto
npm install @prisma/client



