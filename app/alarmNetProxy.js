const service = require('./alarmNetService')  

function login(loginRequest, process){
    
    function processLoginResponse(res, err){
        if(err){
            process(null, err)
        }

        process(res, null)
    }
    
    service.post('/TC21API/TC2.asmx/AuthenticateUserLogin', loginRequest, processLoginResponse)
}

module.exports.login = login

