const Drinks = require('../models/drinkModel');
const getters = require('../public/javascripts/getters');

const newDrink = (req, res) => {
    res.render('drinks/new')
}

const createDrink = async (req, res) => {
    await Drinks.create(req.body)
    res.redirect('/drinks/new')
}

const showReviews = async (req, res) => {
    const drink = await Drinks.findById(req.params.id).populate('reviews');
    const getUserScore = getters.getUserScore
    

    res.render('drinks/reviews', {drink, getUserScore})
}



module.exports = {
    new: newDrink, 
    createDrink,
    show: showReviews, 
}