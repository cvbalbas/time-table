module.exports = {router}

function router(app, fns){
    app.get('/', function(request, response){
        fns.getDataFromTimetableTable(function (data){
            response.render('timetable', {data:data});
        })
    });
    app.post("/updateTimetableTable", function (request, response){
        var student = request.body.student
        var cell = request.body.cell
        fns.updateTimetableTable(cell, student)
        fns.getDataFromTimetableTable()
    })
}