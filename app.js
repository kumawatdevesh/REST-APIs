const express = require('express');
const app = express();
const books = require('./models/db');
const bodyParser = require('body-parser');
const controller = require('./router/routers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controller);
app.listen(3000);
