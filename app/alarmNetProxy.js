const service = require('./alarmNetService')  

function login(loginRequest, process){
    console.log('proxy.Login')
    function processLoginResponse(res, err){
        if(err){
            process(null, err)
        }

        process(res, null)
    }
    
    service.post('/TC21API/TC2.asmx/AuthenticateUserLogin', loginRequest, processLoginResponse)
}

function getSessionDetails(getSessionDetailsRequest, process){
    console.log('proxy.getSessionDetails')
    function processGetSessionDetailsResponse(res, err){
        if(err){
            process(null, err)
        }

        process(res, null)
    }
    
    console.log('GetSessionDetailsRequest /n' + JSON.stringify(getSessionDetailsRequest))

    service.post('/TC21API/TC2.asmx/GetSessionDetails', getSessionDetailsRequest, processGetSessionDetailsResponse)
}

module.exports.login = login
module.exports.getSessionDetails = getSessionDetails

