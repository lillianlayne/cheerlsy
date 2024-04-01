const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controller/categoriesController');

// all paths relative to /categories 

// show all drinks in a category
router.get('/drinks/:category', categoryCtrl.show)


module.exports = router