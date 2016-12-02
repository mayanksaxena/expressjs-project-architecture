var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard/template', { title: 'Dashboard page' });
});

module.exports = router;