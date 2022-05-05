const express = require('express');
const app = express();
const mysql = require("mysql"); //need to install mysql
var data;

app.set('view engine', 'ejs')

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

app.get('/', function(request, response){
    getDataFromTimetableTable()
    response.render('timetable', {data:data});
    console.log(data)
});














function getDataFromTimetableTable(){
    var sql = "SELECT * FROM timetable"; //we want to get everything from timetable TABLE
    con.query(sql, function (err, result) { 
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result)); 
        data = result;
    })
}

