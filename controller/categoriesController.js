const Drinks = require('../models/drinkModel');

const showCategory = async (req, res) => {
    const oneCategory = req.params.category;
    const drinks = await Drinks.find({category: oneCategory});

    res.render('categories/drinks', {drinks})
}

module.exports = {
    show: showCategory
}