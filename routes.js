module.exports = router
const req = require("express/lib/request")
const {updateTimetableTable, getDataFromTimetableTable, addTimetableTable, refreshTimetableBrowserData, addTutor, getTutorNames} = require("./services")

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
    app.post("/getTutorNames", function (request, response){
        var tutorNames = getTutorNames(function (data){
            response.send(data)
        })

    })
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
        console.log(tablename)
        var quantity = request.body.quantity
        updateTimetableTable(tutor, cell, student, tablename, quantity, wss)
    })
    app.post("/addTimetableTable", function (request, response) {
        var tutor = request.body.tutor
        var weekdate = request.body.weekdate
        addTimetableTable(tutor, weekdate)
    })
    app.post("/addTutor", function (request, response) {
        var newTutor = request.body.newTutor
        addTutor(newTutor)
        response.send(newTutor+" added")
    })
}