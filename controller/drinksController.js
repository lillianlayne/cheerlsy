const Drinks = require('../models/drinkModel');
const getters = require('../public/javascripts/getters');

const newDrink = (req, res) => {
    res.render('drinks/new')
}

const createDrink = async (req, res) => {
    req.body.label =  req.body.label.replace(' ', '-');
    await Drinks.create(req.body)
    res.redirect('/drinks/new')
}

const showReviews = async (req, res) => {
    const drink = await Drinks.findById(req.params.id).populate('reviews');
    const getUserScore = getters.getUserScore;
    const getDate = getters.getDate;


    const oneScore = drink.reviews.map((review) => {
        const array = [review.taste, review.presentation, review.price, review.localVibe];
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        
        return sum / 4

    });

    
    const overallScore = getUserScore(oneScore);


    const removeDash = (arg) => {
        return arg.replace('-', ' ')
    };
    

    res.render('drinks/reviews', {drink, removeDash, getUserScore, getDate, overallScore})
}



module.exports = {
    new: newDrink, 
    createDrink,
    show: showReviews, 
}