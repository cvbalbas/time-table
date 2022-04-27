module.exports = {getDataFromTimetableTable, updateTimetableTable}
const mysql = require("mysql");

var con = mysql.createConnection({host: "localhost", user: "root", password: "", database: "timetable" });
con.connect(function(err) { 
    if (err) throw err;
    console.log("Connected!");
});

function getDataFromTimetableTable(callback){
    var sql = "SELECT * FROM timetable"; 
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
