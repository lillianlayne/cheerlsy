const Drinks = require('../models/drinkModel');


const newDrink = (req, res) => {
    res.render('drinks/new')
}

const createDrink = async (req, res) => {
    await Drinks.create(req.body)
    res.redirect('/drinks/new')
}

const showReviews = async (req, res) => {
    const drink = await Drinks.findById(req.params.id);
    res.render('drinks/reviews', {drink})
}



module.exports = {
    new: newDrink, 
    createDrink,
    show: showReviews, 
}