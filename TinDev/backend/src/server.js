const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();
mongoose.connect('mongodb+srv://mauri:M210818v@cluster0-hk10w.mongodb.net/omnistack8?retryWrites=true&w=majority',
    { useNewUrlParser:true, useUnifiedTopology: true
    });

server.use(express.json());
server.use(routes);
server.listen(3333);


// video da aula 2 aos 49:07