module.exports = {getDataFromTimetableTable, updateTimetableTable}
const con = require("./connect")

function getDataFromTimetableTable(callback){
    var sql = "SELECT * FROM timetable"; 
    con.query(sql, function (err, result) { 
        if (err) throw err;
        data = result;
        callback(data)
    })
}

function updateTimetableTable(cell, student, table){
    var sql = "UPDATE timetable SET `" + cell + "` = '" + student +"' WHERE `timetable`.`id` = " + table;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
}
