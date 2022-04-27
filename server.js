const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql"); //need to install mysql


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})

const routes = require("./routes");
routes.router(app);