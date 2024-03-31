var express = require('express');
var router = express.Router();

const indexCtrl = require('../controller/indexController');

// all paths relative to index

// GET / render index 
router.get('/', indexCtrl.index)
// GET /categories/drinks
router.get('/categories/drinks/:category', indexCtrl.showCategory)


module.exports = router;
