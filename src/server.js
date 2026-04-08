const express = require('express');
const app = express();
const sequelize = require('./database/index');

// rota raiz
app.get('/', (req, res) => res.send('Servidor rodando! 🔥🔥'));

// suas rotas
app.use('/turma', require('./routes/turmaRoutes'));

// servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000 🟢🟢'));