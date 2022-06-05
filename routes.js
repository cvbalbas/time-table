module.exports = router
const {updateTimetableTable, getDataFromTimetableTable, addTimetableTable} = require("./services")

function router(app, wss){
    app.get('/', function(request, response){
        getDataFromTimetableTable(function (data){
            response.render('timetable', {data:data});
        })
    });
    app.post("/updateTimetableTable", function (request, response){
        var student = request.body.student
        var cell = request.body.cell
        var table = request.body.table
        var quantity = request.body.quantity
        updateTimetableTable(cell, student, table, quantity, wss)
    })
    app.post("/addTimetableTable", function (request, response) {
        var weekdate = request.body.weekdate
        addTimetableTable(weekdate)
    })
}