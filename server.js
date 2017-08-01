var express = require('express')
var bodyParser = require('body-parser')

var proxy = require('./app/alarmNetProxy')

 
var app = express()

app.use( bodyParser.json() )
 
app.post('/login', function(req, res) {
    proxy.login(req.body, function process(result, err){
        if(err){
            //something failed
        }
        res.end(JSON.stringify(result))
    })

})
 
app.listen(80)