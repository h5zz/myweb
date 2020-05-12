var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('./games', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('index');
});

module.exports = router;