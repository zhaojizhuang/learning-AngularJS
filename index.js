var express = require('express')

var app = express()

app.use(express.static(__dirname+'/still-learn/9include'))

app.listen(4000)
