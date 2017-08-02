var https = require('https')
var urlcodeJson = require('urlcode-json')
var xml2jsParser = require('xml2js-parser')

var host = 'rs.alarmnet.com'

function post(endpoint, data, process) {
    var dataString = urlcodeJson.encode(data)

    var options = {
        host: host,
        path: endpoint,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': dataString.length
        }
    };

    var req = https.request(options, function(res) {
        var msg = ''

        res.setEncoding('utf8')
        res.on('data', function(chunk) {
            msg += chunk
        })
        res.on('end', function() {
            try{
                var cleanedString = msg.replace("\ufeff", "");
                var responseObject = xml2jsParser.parseStringSync(cleanedString)
                console.log(responseObject)
                process(responseObject, null)
            } catch(e) {
                process(null, e);
            }
        })
        res.on('error', function(err){
            console.log(err)
            process(null, err)
        })
    })

    req.write(dataString);
    req.end();
}

module.exports.post = post  
