var express = require('express')
var bodyParser = require('body-parser')

var proxy = require('./app/alarmNetProxy')

 
var app = express() 

app.use( bodyParser.json() )

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
 
app.post('/Login', function(req, res) {
    proxy.login(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})

app.post('/GetSessionDetails', function(req, res) {
    proxy.getSessionDetails(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})

app.post('/Logout', function(req, res) {
    proxy.logout(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})

app.post('/GetPanelMetaDataAndFullStatus', function(req, res) {
    proxy.getPanelMetaDataAndFullStatus(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})

 app.post('/DisarmSecuritySystem', function(req, res) {
    proxy.disarmSecuritySystem(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})


 app.post('/ArmSecuritySystem', function(req, res) {
    proxy.armSecuritySystem(req.body, function process(result, err){
        if(err){
            res.status(500).end()
        }
        res.json(result)
    })

})




