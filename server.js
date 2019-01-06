const express = require('express');
const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');
const jwt = require('./routes/_helpers/jwt');
const http = require('http');
const routes = require('./routes');
const cors = require('cors')

const port = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(boolParser());
app.use(jwt());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
