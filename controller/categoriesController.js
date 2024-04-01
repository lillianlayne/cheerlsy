const Drinks = require('../models/drinkModel');

const showCategory = async (req, res) => {
    const title = req.params.category.trim();
    const drinks = await Drinks.find({category: title});
   
    res.render('categories/drinks', {drinks, catagory: title})
}

module.exports = {
    show: showCategory
}