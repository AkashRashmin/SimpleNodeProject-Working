module.exports = function(app) {

    app.get('/',function(req,res){ // CODE BLOCK RESPONDING TO CLIENT'S REQUEST '/'
        res.render('index'); // INDEX VIEW FILE Rendered
    });

}