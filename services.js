module.exports = {getDataFromTimetableTable, updateTimetableTable, addTimetableTable, refreshTimetableBrowserData, addTutor, getTutorNames}
const con = require("./connect")

function getDataFromTimetableTable(tutor, callback){
    var sql = "SELECT * FROM "+tutor+""; 
    con.query(sql, function (err, result) { 
        if (err) throw err;
        data = result;
        callback(data)
    })
}

function getTutorNames(callback){
    var tutorNames = []
    var sql = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'timetable';"
    con.query(sql, function (err, result) { 
        if (err) throw err;
        for (var i=0; i<result.length; i++){
           tutorNames.push(result[i]["table_name"])
        }
        callback(tutorNames)
    })
}


function updateTimetableTable(tutor, cell, student, tablename, quantity, wss){
    var defaultRow = []
    var rowsNotUpdated
    if (quantity == "single"){
        var sql = "UPDATE " + tutor + " SET `" + cell + "` = '" + student + "' WHERE `" + tutor + "`.`weekdate` = '" + tablename + "'";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            refreshTimetableBrowserData(wss, rowsNotUpdated, tutor)
        });
    } else {
        var sql = "SELECT * FROM "+tutor+" WHERE `id` = '1'";
        con.query(sql, function (err, result) { 
            if (err) throw err;
            defaultRow = result;
            let todayDate = new Date();					//gets current day
	        let dayofweeknumber = todayDate.getDay();
            let weekOfDate = new Date()
            weekOfDate.setDate(weekOfDate.getDate() - dayofweeknumber + 1)
            weekOfDate = weekOfDate.toISOString().slice(0, 10)
            var sql2 = "SELECT * FROM "+tutor+" WHERE `weekdate` >= '"+weekOfDate+"' AND (`c0` != '"+defaultRow[0].c0+"' OR `c1` != '"+defaultRow[0].c1+"' OR `c2` != '"+defaultRow[0].c2+"' OR `c3` != '"+defaultRow[0].c3+"' OR `c4` != '"+defaultRow[0].c4+"' OR `c5` != '"+defaultRow[0].c5+"' OR `c6` != '"+defaultRow[0].c6+"' OR `c7` != '"+defaultRow[0].c7+"' OR `c8` != '"+defaultRow[0].c8+"' OR `c9` != '"+defaultRow[0].c9+"' OR `c10` != '"+defaultRow[0].c10+"' OR `c11` != '"+defaultRow[0].c11+"' OR `c12` != '"+defaultRow[0].c12+"' OR `c13` != '"+defaultRow[0].c13+"' OR `c14` != '"+defaultRow[0].c14+"' OR `c15` != '"+defaultRow[0].c15+"' OR `c16` != '"+defaultRow[0].c16+"' OR `c17` != '"+defaultRow[0].c17+"' OR `c18` != '"+defaultRow[0].c18+"' OR `c19` != '"+defaultRow[0].c19+"' OR `c20` != '"+defaultRow[0].c20+"' OR `c21` != '"+defaultRow[0].c21+"' OR `c22` != '"+defaultRow[0].c22+"' OR `c23` != '"+defaultRow[0].c23+"' OR `c24` != '"+defaultRow[0].c24+"' OR `c25` != '"+defaultRow[0].c25+"' OR `c26` != '"+defaultRow[0].c26+"' OR `c27` != '"+defaultRow[0].c27+"' OR `c28` != '"+defaultRow[0].c28+"' OR `c29` != '"+defaultRow[0].c29+"' OR `c30` != '"+defaultRow[0].c30+"' OR `c31` != '"+defaultRow[0].c31+"' OR `c32` != '"+defaultRow[0].c32+"' OR `c33` != '"+defaultRow[0].c33+"' OR `c34` != '"+defaultRow[0].c34+"' OR `c35` != '"+defaultRow[0].c35+"' OR `c36` != '"+defaultRow[0].c36+"' OR `c37` != '"+defaultRow[0].c37+"' OR `c38` != '"+defaultRow[0].c38+"' OR `c39` != '"+defaultRow[0].c39+"' OR `c40` != '"+defaultRow[0].c40+"' OR `c41` != '"+defaultRow[0].c41+"' OR `c42` != '"+defaultRow[0].c42+"' OR `c43` != '"+defaultRow[0].c43+"' OR `c44` != '"+defaultRow[0].c44+"' OR `c45` != '"+defaultRow[0].c45+"' OR `c46` != '"+defaultRow[0].c46+"' OR `c47` != '"+defaultRow[0].c47+"' OR `c48` != '"+defaultRow[0].c48+"' OR `c49` != '"+defaultRow[0].c49+"' OR `c50` != '"+defaultRow[0].c50+"' OR `c51` != '"+defaultRow[0].c51+"' OR `c52` != '"+defaultRow[0].c52+"' OR `c53` != '"+defaultRow[0].c53+"' OR `c54` != '"+defaultRow[0].c54+"' OR `c55` != '"+defaultRow[0].c55+"' OR `c56` != '"+defaultRow[0].c56+"' OR `c57` != '"+defaultRow[0].c57+"' OR `c58` != '"+defaultRow[0].c58+"' OR `c59` != '"+defaultRow[0].c59+"' OR `c60` != '"+defaultRow[0].c60+"' OR `c61` != '"+defaultRow[0].c61+"' OR `c62` != '"+defaultRow[0].c62+"' OR `c63` != '"+defaultRow[0].c63+"' OR `c64` != '"+defaultRow[0].c64+"' OR `c65` != '"+defaultRow[0].c65+"' OR `c66` != '"+defaultRow[0].c66+"' OR `c67` != '"+defaultRow[0].c67+"' OR `c68` != '"+defaultRow[0].c68+"' OR `c69` != '"+defaultRow[0].c69+"' OR `c70` != '"+defaultRow[0].c70+"' OR `c71` != '"+defaultRow[0].c71+"' OR `c72` != '"+defaultRow[0].c72+"' OR `c73` != '"+defaultRow[0].c73+"' OR `c74` != '"+defaultRow[0].c74+"' OR `c75` != '"+defaultRow[0].c75+"' OR `c76` != '"+defaultRow[0].c76+"' OR `c77` != '"+defaultRow[0].c77+"' OR `c78` != '"+defaultRow[0].c78+"' OR `c79` != '"+defaultRow[0].c79+"' OR `c80` != '"+defaultRow[0].c80+"' OR `c81` != '"+defaultRow[0].c81+"' OR `c82` != '"+defaultRow[0].c82+"' OR `c83` != '"+defaultRow[0].c83+"')";
            con.query(sql2, function (err, result) {
                if (err) throw err;
                console.log(result.length + " record(s)  not updated");
                rowsNotUpdated = result
                var sql3 = "UPDATE "+tutor+" SET `" + cell + "` = '" + student +"' WHERE (`weekdate` >= '"+weekOfDate+"' OR `id` = '1') AND `c0` = '"+defaultRow[0].c0+"' AND `c1` = '"+defaultRow[0].c1+"' AND `c2` = '"+defaultRow[0].c2+"' AND `c3` = '"+defaultRow[0].c3+"' AND `c4` = '"+defaultRow[0].c4+"' AND `c5` = '"+defaultRow[0].c5+"' AND `c6` = '"+defaultRow[0].c6+"' AND `c7` = '"+defaultRow[0].c7+"' AND `c8` = '"+defaultRow[0].c8+"' AND `c9` = '"+defaultRow[0].c9+"' AND `c10` = '"+defaultRow[0].c10+"' AND `c11` = '"+defaultRow[0].c11+"' AND `c12` = '"+defaultRow[0].c12+"' AND `c13` = '"+defaultRow[0].c13+"' AND `c14` = '"+defaultRow[0].c14+"' AND `c15` = '"+defaultRow[0].c15+"' AND `c16` = '"+defaultRow[0].c16+"' AND `c17` = '"+defaultRow[0].c17+"' AND `c18` = '"+defaultRow[0].c18+"' AND `c19` = '"+defaultRow[0].c19+"' AND `c20` = '"+defaultRow[0].c20+"' AND `c21` = '"+defaultRow[0].c21+"' AND `c22` = '"+defaultRow[0].c22+"' AND `c23` = '"+defaultRow[0].c23+"' AND `c24` = '"+defaultRow[0].c24+"' AND `c25` = '"+defaultRow[0].c25+"' AND `c26` = '"+defaultRow[0].c26+"' AND `c27` = '"+defaultRow[0].c27+"' AND `c28` = '"+defaultRow[0].c28+"' AND `c29` = '"+defaultRow[0].c29+"' AND `c30` = '"+defaultRow[0].c30+"' AND `c31` = '"+defaultRow[0].c31+"' AND `c32` = '"+defaultRow[0].c32+"' AND `c33` = '"+defaultRow[0].c33+"' AND `c34` = '"+defaultRow[0].c34+"' AND `c35` = '"+defaultRow[0].c35+"' AND `c36` = '"+defaultRow[0].c36+"' AND `c37` = '"+defaultRow[0].c37+"' AND `c38` = '"+defaultRow[0].c38+"' AND `c39` = '"+defaultRow[0].c39+"' AND `c40` = '"+defaultRow[0].c40+"' AND `c41` = '"+defaultRow[0].c41+"' AND `c42` = '"+defaultRow[0].c42+"' AND `c43` = '"+defaultRow[0].c43+"' AND `c44` = '"+defaultRow[0].c44+"' AND `c45` = '"+defaultRow[0].c45+"' AND `c46` = '"+defaultRow[0].c46+"' AND `c47` = '"+defaultRow[0].c47+"' AND `c48` = '"+defaultRow[0].c48+"' AND `c49` = '"+defaultRow[0].c49+"' AND `c50` = '"+defaultRow[0].c50+"' AND `c51` = '"+defaultRow[0].c51+"' AND `c52` = '"+defaultRow[0].c52+"' AND `c53` = '"+defaultRow[0].c53+"' AND `c54` = '"+defaultRow[0].c54+"' AND `c55` = '"+defaultRow[0].c55+"' AND `c56` = '"+defaultRow[0].c56+"' AND `c57` = '"+defaultRow[0].c57+"' AND `c58` = '"+defaultRow[0].c58+"' AND `c59` = '"+defaultRow[0].c59+"' AND `c60` = '"+defaultRow[0].c60+"' AND `c61` = '"+defaultRow[0].c61+"' AND `c62` = '"+defaultRow[0].c62+"' AND `c63` = '"+defaultRow[0].c63+"' AND `c64` = '"+defaultRow[0].c64+"' AND `c65` = '"+defaultRow[0].c65+"' AND `c66` = '"+defaultRow[0].c66+"' AND `c67` = '"+defaultRow[0].c67+"' AND `c68` = '"+defaultRow[0].c68+"' AND `c69` = '"+defaultRow[0].c69+"' AND `c70` = '"+defaultRow[0].c70+"' AND `c71` = '"+defaultRow[0].c71+"' AND `c72` = '"+defaultRow[0].c72+"' AND `c73` = '"+defaultRow[0].c73+"' AND `c74` = '"+defaultRow[0].c74+"' AND `c75` = '"+defaultRow[0].c75+"' AND `c76` = '"+defaultRow[0].c76+"' AND `c77` = '"+defaultRow[0].c77+"' AND `c78` = '"+defaultRow[0].c78+"' AND `c79` = '"+defaultRow[0].c79+"' AND `c80` = '"+defaultRow[0].c80+"' AND `c81` = '"+defaultRow[0].c81+"' AND `c82` = '"+defaultRow[0].c82+"' AND `c83` = '"+defaultRow[0].c83+"'";
                con.query(sql3, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated: "+student+"@"+cell);
                refreshTimetableBrowserData(wss, rowsNotUpdated, tutor)
                });
            });
        })
    }
}

function addTimetableTable(tutor, weekdate) {

    var sql = "SELECT * FROM "+tutor+" WHERE `id` = 1"
    con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
    });
    
    var sql2 = "INSERT INTO `"+tutor+"`(`weekdate`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`) VALUES('" + weekdate + "' ,'" + data[0].c0 + "', '" + data[0].c1 + "', '" + data[0].c2 + "', '" + data[0].c3 + "', '" + data[0].c4 + "', '" + data[0].c5 + "', '" + data[0].c6 + "', '" + data[0].c7 + "', '" + data[0].c8 + "', '" + data[0].c9 + "', '" + data[0].c10 + "', '" + data[0].c11 + "', '" + data[0].c12 + "', '" + data[0].c13 + "', '" + data[0].c14 + "', '" + data[0].c15 + "', '" + data[0].c16 + "', '" + data[0].c17 + "', '" + data[0].c18 + "', '" + data[0].c19 + "', '" + data[0].c20 + "', '" + data[0].c21 + "', '" + data[0].c22 + "', '" + data[0].c23 + "', '" + data[0].c24 + "', '" + data[0].c25 + "', '" + data[0].c26 + "', '" + data[0].c27 + "', '" + data[0].c28 + "', '" + data[0].c29 + "', '" + data[0].c30 + "', '" + data[0].c31 + "', '" + data[0].c32 + "', '" + data[0].c33 + "', '" + data[0].c34 + "', '" + data[0].c35 + "', '" + data[0].c36 + "', '" + data[0].c37 + "', '" + data[0].c38 + "', '" + data[0].c39 + "', '" + data[0].c40 + "', '" + data[0].c41 + "', '" + data[0].c42 + "', '" + data[0].c43 + "', '" + data[0].c44 + "', '" + data[0].c45 + "', '" + data[0].c46 + "', '" + data[0].c47 + "', '" + data[0].c48 + "', '" + data[0].c49 + "', '" + data[0].c50 + "', '" + data[0].c51 + "', '" + data[0].c52 + "', '" + data[0].c53 + "', '" + data[0].c54 + "', '" + data[0].c55 + "', '" + data[0].c56 + "', '" + data[0].c57 + "', '" + data[0].c58 + "', '" + data[0].c59 + "', '" + data[0].c60 + "', '" + data[0].c61 + "', '" + data[0].c62 + "', '" + data[0].c63 + "', '" + data[0].c64 + "', '" + data[0].c65 + "', '" + data[0].c66 + "', '" + data[0].c67 + "', '" + data[0].c68 + "', '" + data[0].c69 + "', '" + data[0].c70 + "', '" + data[0].c71 + "', '" + data[0].c72 + "', '" + data[0].c73 + "', '" + data[0].c74 + "', '" + data[0].c75 + "', '" + data[0].c76 + "', '" + data[0].c77 + "', '" + data[0].c78 + "', '" + data[0].c79 + "', '" + data[0].c80 + "', '" + data[0].c81 + "', '" + data[0].c82 + "', '" + data[0].c83 + "');";

    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}

function addTutor(newTutor){
    var sql = "CREATE TABLE `timetable`.`"+newTutor+"` ( `id` INT NOT NULL AUTO_INCREMENT , `weekdate` DATE NOT NULL , `c0` VARCHAR(20) NOT NULL,`c1` VARCHAR(20) NOT NULL,`c2` VARCHAR(20) NOT NULL,`c3` VARCHAR(20) NOT NULL,`c4` VARCHAR(20) NOT NULL,`c5` VARCHAR(20) NOT NULL,`c6` VARCHAR(20) NOT NULL,`c7` VARCHAR(20) NOT NULL,`c8` VARCHAR(20) NOT NULL,`c9` VARCHAR(20) NOT NULL,`c10` VARCHAR(20) NOT NULL,`c11` VARCHAR(20) NOT NULL,`c12` VARCHAR(20) NOT NULL,`c13` VARCHAR(20) NOT NULL,`c14` VARCHAR(20) NOT NULL,`c15` VARCHAR(20) NOT NULL,`c16` VARCHAR(20) NOT NULL,`c17` VARCHAR(20) NOT NULL,`c18` VARCHAR(20) NOT NULL,`c19` VARCHAR(20) NOT NULL,`c20` VARCHAR(20) NOT NULL,`c21` VARCHAR(20) NOT NULL,`c22` VARCHAR(20) NOT NULL,`c23` VARCHAR(20) NOT NULL,`c24` VARCHAR(20) NOT NULL,`c25` VARCHAR(20) NOT NULL,`c26` VARCHAR(20) NOT NULL,`c27` VARCHAR(20) NOT NULL,`c28` VARCHAR(20) NOT NULL,`c29` VARCHAR(20) NOT NULL,`c30` VARCHAR(20) NOT NULL,`c31` VARCHAR(20) NOT NULL,`c32` VARCHAR(20) NOT NULL,`c33` VARCHAR(20) NOT NULL,`c34` VARCHAR(20) NOT NULL,`c35` VARCHAR(20) NOT NULL,`c36` VARCHAR(20) NOT NULL,`c37` VARCHAR(20) NOT NULL,`c38` VARCHAR(20) NOT NULL,`c39` VARCHAR(20) NOT NULL,`c40` VARCHAR(20) NOT NULL,`c41` VARCHAR(20) NOT NULL,`c42` VARCHAR(20) NOT NULL,`c43` VARCHAR(20) NOT NULL,`c44` VARCHAR(20) NOT NULL,`c45` VARCHAR(20) NOT NULL,`c46` VARCHAR(20) NOT NULL,`c47` VARCHAR(20) NOT NULL,`c48` VARCHAR(20) NOT NULL,`c49` VARCHAR(20) NOT NULL,`c50` VARCHAR(20) NOT NULL,`c51` VARCHAR(20) NOT NULL,`c52` VARCHAR(20) NOT NULL,`c53` VARCHAR(20) NOT NULL,`c54` VARCHAR(20) NOT NULL,`c55` VARCHAR(20) NOT NULL,`c56` VARCHAR(20) NOT NULL,`c57` VARCHAR(20) NOT NULL,`c58` VARCHAR(20) NOT NULL,`c59` VARCHAR(20) NOT NULL,`c60` VARCHAR(20) NOT NULL,`c61` VARCHAR(20) NOT NULL,`c62` VARCHAR(20) NOT NULL,`c63` VARCHAR(20) NOT NULL,`c64` VARCHAR(20) NOT NULL,`c65` VARCHAR(20) NOT NULL,`c66` VARCHAR(20) NOT NULL,`c67` VARCHAR(20) NOT NULL,`c68` VARCHAR(20) NOT NULL,`c69` VARCHAR(20) NOT NULL,`c70` VARCHAR(20) NOT NULL,`c71` VARCHAR(20) NOT NULL,`c72` VARCHAR(20) NOT NULL,`c73` VARCHAR(20) NOT NULL,`c74` VARCHAR(20) NOT NULL,`c75` VARCHAR(20) NOT NULL,`c76` VARCHAR(20) NOT NULL,`c77` VARCHAR(20) NOT NULL,`c78` VARCHAR(20) NOT NULL,`c79` VARCHAR(20) NOT NULL,`c80` VARCHAR(20) NOT NULL,`c81` VARCHAR(20) NOT NULL,`c82` VARCHAR(20) NOT NULL,`c83` VARCHAR(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        let todayDate = new Date();
        let dayofweeknumber = todayDate.getDay();
        let weekOfDate = new Date()
        weekOfDate.setDate(weekOfDate.getDate() - dayofweeknumber + 1)
        weekOfDate = weekOfDate.toLocaleDateString("en-GB", {timeZone: "Europe/London"})
        weekOfDate = weekOfDate.slice(0,10).split("/").reverse().join("-")
        var sql2 = "INSERT INTO `"+newTutor+"` (`id`, `weekdate`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`) VALUES ('1', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');INSERT INTO `"+newTutor+"` (`id`, `weekdate`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`) VALUES ('2', '"+weekOfDate+"', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');"
        con.query(sql2, function (err, result) {
            if (err) throw err;
            console.log("New tutor added: "+ newTutor);
        });
    });

}

function refreshTimetableBrowserData(wss, rowsNotUpdated, tutor){
    wss.clients.forEach(function each(client) {
        getDataFromTimetableTable(tutor, function (data){
            client.send("tutor: "+tutor)
            client.send("data: "+JSON.stringify(data))
            client.send("rowsNotUpdated: "+JSON.stringify(rowsNotUpdated))
        })
    });
}



