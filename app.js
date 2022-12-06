const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

require('dotenv').config();

const { PORT } = require('./config/config');
const apiRouter = require('./router/api.router');
// const ApiError = require('./error/ErrorHandler');

const app = express();

// app.use('*', _notFoundPathUrl);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.join(__dirname, '.env') });

app.use('/', apiRouter);

app.set('view engine', 'ejs');

app.use(_mainErrorHandler);

// function _notFoundPathUrl(err, req, res, next) {
    //     next(new ApiError(402, 0, 'Not valid url status'));
    // }
function _mainErrorHandler(err, req, res, next) {
    console.log('****************************');
    console.log(err);
    console.log('****************************');
    res.status(err.status || 500)
        .json({
            status: err.status || 500,
            errorStatus: err.errorStatus || 0,
            message: err.message || ''
        });
}

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/view')));

mongoose.connect('mongodb://localhost:27017/testKPIDB')
    .then(() => console.log('DB connect success'));

app.listen(PORT, () => {
    console.log(`start server ${PORT}`);
});
