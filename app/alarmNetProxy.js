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

function getPanelMetaDataAndFullStatus(req, process){
    console.log('proxy.getPanelMetaDataAndFullStatus')
    service.post('/TC21API/TC2.asmx/GetPanelMetaDataAndFullStatus', req, process)
}

function armSecuritySystem(req, process){
    console.log('proxy.armSecuritySystem')
    service.post('/TC21API/TC2.asmx/ArmSecuritySystem', req, process)
}

function disarmSecuritySystem(req, process){
    console.log('proxy.disarmSecuritySystem')
    service.post('/TC21API/TC2.asmx/DisarmSecuritySystem', req, process)
}

module.exports.login = login
module.exports.getSessionDetails = getSessionDetails
module.exports.logout = logout
module.exports.getPanelMetaDataAndFullStatus = getPanelMetaDataAndFullStatus
module.exports.armSecuritySystem = armSecuritySystem
module.exports.disarmSecuritySystem = disarmSecuritySystem

 