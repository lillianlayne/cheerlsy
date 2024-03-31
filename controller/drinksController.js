const Drinks = require('../models/drinkModel');


const newDrink = (req, res) => {
    res.render('drinks/new')
}

const createDrink = async (req, res) => {
    await Drinks.create(req.body)
    res.redirect('/drinks/new')
}

module.exports = {
    new: newDrink, 
    createDrink
}