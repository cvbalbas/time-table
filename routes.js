module.exports = router
const { updateTimetableTable, getDataFromTimetableTable, addTimetableTable, delTimetableTable} = require("./services")

function router(app){
    app.get('/', function(request, response){
        getDataFromTimetableTable(function (data){
            response.render('timetable', {data:data});
        })
    });
    app.post("/updateTimetableTable", function (request, response){
        var student = request.body.student
        var cell = request.body.cell
        var table = request.body.table
        updateTimetableTable(cell, student, table)
    })
    app.post("/addTimetableTable", function (request, response) {
        var weekdate = request.body.weekdate
        addTimetableTable(weekdate)
    })
    app.post("/delTimetableTable", function (request, response) {
        var id = request.body.id
        delTimetableTable(id)
    })
}