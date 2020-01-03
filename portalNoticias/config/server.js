var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mysql = require('mysql');

var app = express();
var port = 3000;
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.listen(port, () =>
    console.log(`Servidor está ONLINE utilizando a porta:`, port));

app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .into(app);

module.exports = app;