const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controller/reviewsController');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// all paths relative to /drinks
// GET /form/:id - render form to add a review for a certain drink
router.get('/drinks/form/:id',ensureLoggedIn, reviewsCtrl.renderForm);
// post review for drink 
router.post('/drinks/reviews/:id', ensureLoggedIn, reviewsCtrl.create);

module.exports = router;


