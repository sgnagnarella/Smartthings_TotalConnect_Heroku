const service = require('./alarmNetService')  

function login(req, process){
    console.log('proxy.Login')
    service.post('/TC21API/TC2.asmx/AuthenticateUserLogin', req, process)
}

function getSessionDetails(req, process){
    console.log('proxy.getSessionDetails')
    service.post('/TC21API/TC2.asmx/GetSessionDetails', req, process)
}


function logout(req, process){
    console.log('proxy.logout')
    service.post('/TC21API/TC2.asmx/Logout', req, process)
}


module.exports.login = login
module.exports.getSessionDetails = getSessionDetails
module.exports.logout = logout

