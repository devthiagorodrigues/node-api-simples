import express from 'express';
const app = express();
const port = 3000;

import router from './router/apiRouter.js';

app.use('/', router)

app.listen(port, () => {
    console.log(`Servidor on-line na porta ${port}`);
})