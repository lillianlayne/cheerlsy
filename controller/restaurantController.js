const Drinks = require('../models/drinkModel');
const getters = require('../public/javascripts/getters');

const show = async (req, res) => {
    try {
        const title = req.params.restaurant.trim();
        const drinks = await Drinks.find({restaurant: title});
       
        res.render('categories/drinks', {drinks, restaurant: title})

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    show
}