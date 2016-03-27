var express = require('express'),
    getter  = require('about').getter(),
    router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get("/get_about", function(req, res, next) {
    res.send(getter(req, res))
});

module.exports = router;
