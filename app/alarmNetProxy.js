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


function logout(logoutRequest, process){
    console.log('proxy.logout')
    function processLogoutResponse(res, err){
        if(err){
            process(null, err)
        }

        process(res, null)
    }
    
    service.post('/TC21API/TC2.asmx/Logout', logoutRequest, processLogoutResponse)
}


module.exports.login = login
module.exports.getSessionDetails = getSessionDetails
module.exports.logout = logout

