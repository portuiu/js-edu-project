var express = require('express'),
    https = require("https");

getter = function(){
    var options = {
        host: 'api.github.com',
        path: '/repos/portuiu/js-edu-project/collaborators?access_token=' + key, // Ключ для доступа к информации
        port: 443,
        headers:
        {"User-Agent": "weather"}
    };

    var callback = function(response) {
        var str = '';


        response.on('data', function (chunk) {
            str += chunk;
        });


        response.on('end', function () {
            res.setHeader("Content-Type","application/json");
            res.end(str);
        });
    };

    var request = https.request(options, callback);

    request.end();
})

module.exports = getter;