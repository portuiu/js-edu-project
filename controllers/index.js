var express = require('express');
var router  = express.Router();
var about = require('./about');

//Тут находятся все контроллеры
router.use('/about', require('./about'));

//GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page' });
});

module.exports = router;
