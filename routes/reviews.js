const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controller/reviewsController');


// render review form 
router.get('/drinks/:id/form', reviewsCtrl.show)
// post review for drink 

module.exports = router;
