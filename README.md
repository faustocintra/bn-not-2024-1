# bn-not-2024-1
Repositório da disciplina Banco de Dados - Não Relacional, 3º semestre DSM Fatec Franca 2024/1


# Criação do projeto back-end
npx aka-demy/create-express-app

Respostas às perguntas:
* Install package...? 'y'
* Give a name for the app: 'back-end'
* Choose a language: 'JavaScript'
* Choose a template engine: 'None'
* Choose a package manager: 'npm'

# Mudando para a pasta do projeto
* cd back-end

# Instalando o prisma como dependencia de desenvolvimento
* npm install prisma -save-dev

# Inicializando o prisma com conector para MongoDB
* npx prisma init --datasource-provider mongodb

# Adicionando o prisma client ao projeto
* npm install @prisma/client