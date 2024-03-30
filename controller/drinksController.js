const Drink = require('../models/drinkModel');

const index = async (req, res) => {
    try {
        const drinks = await Drink.find({});
        res.render('drinks/index', {drinks})
    } catch (err) {
        console.log(err)
    }
}

const newDrink = (req, res) => {
    res.render('drinks/new')
}

const createDrink = async (req, res) => {
    try {
        await Drink.create(req.body);
        res.redirect('/drinks')
    } catch (err) {
        console.log(err)
    }
}

const show = async (req, res) => {
    try {
        const drink = await Drink.findById(req.params.id);
        const reviews = drink.reviews;

        res.render('drinks/reviews', {
            drink,
            reviews
        })

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    index,
    newDrink,
    createDrink,
    show
}