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

var con = mysql.createConnection({host: "localhost", user: "root", password: "", database: "timetable" });
con.connect(function(err) { //connects to database you specified
    if (err) throw err;
    console.log("Connected!");
});

var data;
var fns = {getDataFromTimetableTable: getDataFromTimetableTable, updateTimetableTable:updateTimetableTable}

const routes = require("./routes");
routes.router(app, fns);














function getDataFromTimetableTable(callback){
    var sql = "SELECT * FROM timetable"; //we want to get everything from timetable TABLE
    con.query(sql, function (err, result) { 
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result)); 
        data = result;
        callback(data)
    })
}

function updateTimetableTable(cell, student){
    var sql = "UPDATE timetable SET `"+cell+"` = '"+student+"'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
}
