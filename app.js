const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const axios = require('axios').default;
require('dotenv').config()

const { PORT } = require('./config/config');
const { apiRouter } = require('./router');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/view'));

dotenv.config({ path: path.join(__dirname, '.env') });

app.use('/', apiRouter)

app.listen(PORT,() => {
    console.log(`start server ${PORT}`);
})