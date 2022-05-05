module.exports = {router}
const {updateTimetableTable, getDataFromTimetableTable} = require("./services")

function router(app){
    app.get('/', function(request, response){
        getDataFromTimetableTable(function (data){
            response.render('timetable', {data:data});
        })
    });
    app.post("/updateTimetableTable", function (request, response){
        var student = request.body.student
        var cell = request.body.cell
        updateTimetableTable(cell, student)
        getDataFromTimetableTable(function (data){})
    })
}