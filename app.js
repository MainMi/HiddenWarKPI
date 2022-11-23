const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

require('dotenv').config();

const { PORT } = require('./config/config');
const { apiRouter } = require('./router');

const app = express();

app.use(express.json());

app.use('/', apiRouter);

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/view')));

dotenv.config({ path: path.join(__dirname, '.env') });

mongoose.connect('mongodb://localhost:27017/testKPIDB')
    .then(() => console.log('DB connect success'));

app.listen(PORT, () => {
    console.log(`start server ${PORT}`);
});
