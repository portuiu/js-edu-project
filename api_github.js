/* ������������ ������
var express = require('express');
var router = express.Router();
var https = require("https");*/

// ���������
router.get("/get_about", function(req, res){
    var options = {
        host: 'api.github.com',
        path: '/repos/portuiu/js-edu-project/collaborators?access_token=' + key, // ���� ��� ������� � ����������
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