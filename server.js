const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.sendFile('C:/Users/User/Desktop/time-table/Timetable.html');
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})