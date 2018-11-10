const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

require('dotenv').config()

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.listen(app.get('port'), () => {
  console.log('Hello world!')
})
