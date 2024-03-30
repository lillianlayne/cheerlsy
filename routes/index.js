var express = require('express');
var router = express.Router();

const drinksCtrl = require('../controller/drinksController');

// all paths relative to index

// GET / render index 
router.get('/', drinksCtrl.index);

module.exports = router;
