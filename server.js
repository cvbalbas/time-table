const express = require('express');
const app = express();
const mysql = require("mysql"); //need to install mysql

app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('timetable', {c0:"Somebody"});
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})

var con = mysql.createConnection({ //if you don't have this, then mysql doesn't know which database to connect to
    host: "localhost",             
    user: "root",
    password: "",
    database: "timetable"
  });


con.connect(function(err) { //connects to database you specified
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT * FROM information_schema.tables WHERE table_schema = 'timetable' AND table_name = 'timetable' LIMIT 1" //query to check if a timetable TABLE exists already

    con.query(sql, function (err, result) {
        if (JSON.stringify(result) == "[]"){createTable()} //if query returns nothing that means that no table exists with the name timetable and we trigger a function createTable() to make one for us
    
        function createTable(){ //creates TABLE called timetable with id column and one extra column called c0
            sql = "CREATE TABLE `timetable`.`timetable` ( `id` INT NOT NULL AUTO_INCREMENT , `c0` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`))";
            con.query(sql, function (err, result) { //performs create TABLE query
                if (err) throw err;
                console.log("Table created");
            });
        }
    
        sql = "SELECT * FROM timetable"; //query to get all rows from timetable TABLE (but it's empty so should return nothing)
        con.query(sql, function (err, result) { //performs 'get all rows from timetable' query
            if (err) throw err;
            console.log("Result: " + JSON.stringify(result)); //logs all rows from timetable to console (logs an empty array)
            data = result;
        });
    });
});
