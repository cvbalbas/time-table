const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");
const router = require("./routes");
const WebSocket = require('ws')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})

router(app);

const wss = new WebSocket.Server({ port: 8080 })
 
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        if (message = "refresh"){
            wss.clients.forEach(function each(client) {
                client.send("refresh");
            });
        }   
    })
})