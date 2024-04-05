const Drinks = require("../models/drinkModel");
const getters = require("../public/javascripts/getters");

const index = async (req, res) => {
  const drinks = await Drinks.find({});
  const allCategories = await Drinks.distinct("category");
  const getBgColor = getters.getBgColor;
  res.render("index", { drinks, getBgColor, allCategories });
};

const showCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const drinks = await Drinks.find({ category: category });
    res.render("categories/drinks", { drinks, category });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  index,
  showCategory,
};
