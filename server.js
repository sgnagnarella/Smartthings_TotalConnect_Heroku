var express = require('express')
var bodyParser = require('body-parser')

var proxy = require('./app/alarmNetProxy')

 
var app = express()

app.use( bodyParser.json() )

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
 
app.post('/login', function(req, res) {
    proxy.login(req.body, function process(result, err){
        if(err){
            //something failed
        }
        res.end(JSON.stringify(result))
    })

})
 
