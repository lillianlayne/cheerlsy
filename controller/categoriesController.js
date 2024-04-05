const Drinks = require("../models/drinkModel");

const showCategory = async (req, res) => {
  const title = req.params.category.trim();
  const drinks = await Drinks.find({ category: title });

  res.render("categories/drinks", { drinks, catagory: title });
};

const showAll = async (req, res) => {
  const drinks = await Drinks.find({});

  res.render("categories/view-all", { drinks });
};
module.exports = {
  show: showCategory,
  showAll,
};
