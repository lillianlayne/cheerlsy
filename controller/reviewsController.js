const Drinks = require('../models/drinkModel');

const renderForm = async (req, res) => {
    const drink = await Drinks.findById(req.params.id);

    res.render('drinks/form', {drink})
}

module.exports = {
    renderForm
}