var express = require('express');
var https = require('https');
var router  = express.Router();
var config = require('../config');

var options = {
    host: 'api.github.com',
    path: '/repos/portuiu/js-edu-project/collaborators?access_token=' + config.token, // Ключ для доступа к информации
    port: 443,
    headers:
    {'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
};

//GET /about page
router.get('/', function(req, res, next) {

    var callback = function(response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            var json = JSON.parse(str);
            var collaborators = [];
            json.forEach(function(collaborator){
               collaborators.push(collaborator.login);
            });
            collaborators = JSON.stringify(collaborators);
            res.render('about', { title: 'About', collaborators: collaborators });
        });
    };

    var request = https.request(options, callback);
    request.end();
});

module.exports = router;
