const Drink = require('../models/drinkModel');

const show = async (req, res) => {
    const drink = await Drink.findById(req.params.id);
    try {
    res.render('drinks/form', {drink})
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    show
}