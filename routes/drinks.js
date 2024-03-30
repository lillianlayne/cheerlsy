var express = require('express');
var router = express.Router();

const drinksCtrl = require('../controller/drinksController');

// render index
router.get('/', drinksCtrl.index);
// render new drink page
router.get('/new', drinksCtrl.newDrink);
// post new drink to db
router.post('/', drinksCtrl.createDrink);
// render individual drink page
router.get('/:id', drinksCtrl.show)
// render review form 



module.exports = router;
