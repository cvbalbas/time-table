module.exports = {getDataFromTimetableTable, updateTimetableTable, addTimetableTable}
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

function addTimetableTable(weekdate) {

    console.log(weekdate)

    var sql = "SELECT * FROM timetable WHERE `id` = 0"
    con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
    });
    
    var sql2 = "INSERT INTO`timetable`(`weekdate`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`) VALUES('" + weekdate + "' ,'" + data[0].c0 + "', '" + data[0].c1 + "', '" + data[0].c2 + "', '" + data[0].c3 + "', '" + data[0].c4 + "', '" + data[0].c5 + "', '" + data[0].c6 + "', '" + data[0].c7 + "', '" + data[0].c8 + "', '" + data[0].c9 + "', '" + data[0].c10 + "', '" + data[0].c11 + "', '" + data[0].c12 + "', '" + data[0].c13 + "', '" + data[0].c14 + "', '" + data[0].c15 + "', '" + data[0].c16 + "', '" + data[0].c17 + "', '" + data[0].c18 + "', '" + data[0].c19 + "', '" + data[0].c20 + "', '" + data[0].c21 + "', '" + data[0].c22 + "', '" + data[0].c23 + "', '" + data[0].c24 + "', '" + data[0].c25 + "', '" + data[0].c26 + "', '" + data[0].c27 + "', '" + data[0].c28 + "', '" + data[0].c29 + "', '" + data[0].c30 + "', '" + data[0].c31 + "', '" + data[0].c32 + "', '" + data[0].c33 + "', '" + data[0].c34 + "', '" + data[0].c35 + "', '" + data[0].c36 + "', '" + data[0].c37 + "', '" + data[0].c38 + "', '" + data[0].c39 + "', '" + data[0].c40 + "', '" + data[0].c41 + "', '" + data[0].c42 + "', '" + data[0].c43 + "', '" + data[0].c44 + "', '" + data[0].c45 + "', '" + data[0].c46 + "', '" + data[0].c47 + "', '" + data[0].c48 + "', '" + data[0].c49 + "', '" + data[0].c50 + "', '" + data[0].c51 + "', '" + data[0].c52 + "', '" + data[0].c53 + "', '" + data[0].c54 + "', '" + data[0].c55 + "', '" + data[0].c56 + "', '" + data[0].c57 + "', '" + data[0].c58 + "', '" + data[0].c59 + "', '" + data[0].c60 + "', '" + data[0].c61 + "', '" + data[0].c62 + "', '" + data[0].c63 + "', '" + data[0].c64 + "', '" + data[0].c65 + "', '" + data[0].c66 + "', '" + data[0].c67 + "', '" + data[0].c68 + "', '" + data[0].c69 + "', '" + data[0].c70 + "', '" + data[0].c71 + "', '" + data[0].c72 + "', '" + data[0].c73 + "', '" + data[0].c74 + "', '" + data[0].c75 + "', '" + data[0].c76 + "', '" + data[0].c77 + "', '" + data[0].c78 + "', '" + data[0].c79 + "', '" + data[0].c80 + "', '" + data[0].c81 + "', '" + data[0].c82 + "', '" + data[0].c83 + "');";

    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}