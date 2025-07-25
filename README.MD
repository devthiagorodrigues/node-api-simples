# 🚀 API de Aprendizado com Node.js + Express

Bem-vindo(a)! Este projeto é uma API básica criada com **Node.js**, utilizando o framework **Express**, com rotas organizadas e controladores separados. Ideal para fins de aprendizado e prática de organização de código.

---

## 📁 Estrutura do Projeto

```

api/
├── controllers/         # Funções que controlam as respostas das rotas
│   └── apiController.js
├── router/              # Arquivo com as rotas da API
│   └── apiRouter.js
├── node\_modules/        # Dependências do projeto
├── package.json         # Configurações e dependências
├── package-lock.json    # Versão travada das dependências
└── server.js            # Ponto de entrada da aplicação

````

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/devthiagorodrigues/node-api-simples.git
cd node-api-simples
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
npm run dev
```

> O servidor iniciará em: [http://localhost:3000](http://localhost:3000)

---

## 🔁 Rotas Disponíveis

Todas as rotas retornam uma mensagem de confirmação diretamente do controller. Ainda **não há integração com banco de dados** ou manipulação real de dados.

| Método | Rota | Descrição                            |
|--------|------|----------------------------------------|
| GET    | `/`  | Retorna uma mensagem de sucesso para requisições GET    |
| POST   | `/`  | Retorna uma mensagem de sucesso para requisições POST   |
| PUT    | `/`  | Retorna uma mensagem de sucesso para requisições PUT    |
| PATCH  | `/`  | Retorna uma mensagem de sucesso para requisições PATCH  |
| DELETE | `/`  | Retorna uma mensagem de sucesso para requisições DELETE |

---

## 🧠 Aprendizados

* Organização de projeto em camadas (MVC simplificado)
* Utilização de middlewares e rotas com `express.Router()`
* Separação da lógica das rotas em controladores
* Uso do Nodemon para desenvolvimento

---

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Nodemon](https://nodemon.io/)

---

## 🙋‍♂️ Autor

Feito com 💙 por **Thiago Rodrigues**

* 🌐 [LinkedIn](https://www.linkedin.com/in/devthiagorodrigues)
* 🐙 [GitHub](https://github.com/devthiagorodrigues)
