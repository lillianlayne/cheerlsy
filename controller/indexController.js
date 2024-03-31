const Drinks = require('../models/drinkModel');



const index = async (req, res) => {
    const drinks = await Drinks.find({});

    const getBgColor = (arg) => {
        let bgColor;

        switch (arg) {
            case 'beer':
                bgColor = '#e65227'
                break;
            case 'wine':
                bgColor = '#f05365'
                break;
            case 'cocktails':
                bgColor = '#fbb71f'
                break;
            case 'mocktails':
                bgColor = '#414e24'
                break;
        }
        return bgColor
    }


    res.render('index', {drinks, getBgColor})
}

module.exports = {
    index
}