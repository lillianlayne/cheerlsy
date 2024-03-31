var express = require('express');
var router = express.Router();

const drinksCtrl = require('../controller/drinksController');
// all paths relative to /drinks

// GET /new - render new drink form
router.get('/new', drinksCtrl.new)
// POST /new - post a new drink to the data base
router.post('/new', drinksCtrl.createDrink)



module.exports = router;
