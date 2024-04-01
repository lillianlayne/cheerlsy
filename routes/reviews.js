const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controller/reviewsController');

// all paths relative to /drinks
// GET /form/:id - render form to add a review for a certain drink
router.get('/form/:id', reviewsCtrl.renderForm)

// post review for drink 

module.exports = router;
