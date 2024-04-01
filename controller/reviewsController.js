const Drinks = require('../models/drinkModel');
const Reviews = require('../models/reviewModel')


const renderForm = async (req, res) => {
    const drink = await Drinks.findById(req.params.id);

    res.render('drinks/form', {drink})
}

const createReview = async (req, res) => {
    const review = await Reviews.create(req.body);
    const drink = await Drinks.findById(req.params.id);

    drink.reviews.push(review)
    try {
        await drink.save();    
    } catch (error) {
        console.log(error)
    }

    res.redirect(`/drinks/reviews/${drink._id}`)
}

module.exports = {
    renderForm, 
    create: createReview
}