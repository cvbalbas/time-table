const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");
const router = require("./routes");
const WebSocket = require('ws');
const { getDataFromTimetableTable } = require('./services');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})

const wss = new WebSocket.Server({ port: 8080 })

wss.on("connection", function connection(ws){
})

router(app, wss);

