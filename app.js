const express = require('express');
const { apiRouter } = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/view'));

app.use('/', apiRouter)

app.listen(5000,() => {
    console.log('start server 5000');
})