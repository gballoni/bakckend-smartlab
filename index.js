const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users.route'); // Importa rota
const app = express();
// Configurar acesso à BD.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IoT_database');
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error:'));

db.once('open', function() {
  console.log('Database connection Successful!');
});

app.use('/users', users);
let porta = 8000;


app.listen(porta, () => {
    console.log('Servidor em execução no porta' + porta);
});
