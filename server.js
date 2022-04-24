const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('timetable', {c0:"Somebody"});
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listening at http://%s:%s", host, port)
})