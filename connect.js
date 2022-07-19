const mysql = require("mysql");
var con = mysql.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD, database: process.env.DATABASE, multipleStatements: "true" });
con.connect(function(err) { 
    if (err) throw err;
    console.log("Connected!");
});

setInterval(function () { //we need to keep connection established with server by pinging it often enough lest it disconnects us    
    con.query("SELECT * FROM caryl")
}, 5000);

module.exports = con;