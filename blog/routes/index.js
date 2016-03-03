var express = require('express');
var router = express.Router();

/*home*/
router.get('/', function(req, res, next) {
  res.render('index', {title: 'home'});
});

/*login*/
router.get('/login', function(req, res, next) {
    res.render('login', {title: 'login'});
});

router.post('/login', function(req, res, next) {
});
/*reg*/
router.get('/reg', function(req, res, next) {
    res.render('reg', {title: 'reg'});
});

router.post('/reg', function(req, res, next) {
});
/*logout*/
router.post('/logout', function(req, res, next) {
});

/*post*/
router.get('/post', function(req, res, next) {
    res.render('post', {title: 'post'});
});

router.post('/post', function(req, res, next) {
});

module.exports = router;
