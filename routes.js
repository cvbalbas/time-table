module.exports = router
const req = require("express/lib/request")
const {updateTimetableTable, getDataFromTimetableTable, addTimetableTable, refreshTimetableBrowserData} = require("./services")

function router(app, wss){
    wss.on("connection", function connection(ws){
        ws.on("message", function incoming(message){
            tutor = message.toString()
            refreshTimetableBrowserData(wss, {}, tutor)
        })
    })
    app.get('/', function(request, response){
            response.render('timetable');
    });
    app.post("/getTimetableData", function (request, response){
        var tutor = request.body.tutor
        getDataFromTimetableTable(tutor, function(data){
            response.send(JSON.stringify(data))
        })
    })
    app.post("/updateTimetableTable", function (request, response){
        var tutor = request.body.tutor
        var student = request.body.student
        var cell = request.body.cell
        var tablename = request.body.tablename
        var quantity = request.body.quantity
        updateTimetableTable(tutor, cell, student, tablename, quantity, wss)
    })
    app.post("/addTimetableTable", function (request, response) {
        var tutor = request.body.tutor
        var weekdate = request.body.weekdate
        addTimetableTable(tutor, weekdate)
    })
}