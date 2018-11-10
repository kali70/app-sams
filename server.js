const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(boolParser());

app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
