const Drinks = require("../models/drinkModel");
const Reviews = require("../models/reviewModel");

const renderForm = async (req, res) => {
  const drink = await Drinks.findById(req.params.id);

  res.render("drinks/form", { drink });
};

const createReview = async (req, res) => {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userIcon = req.user.avatar;

  // save inputs as lowercase
  req.body.restaurant = req.body.restaurant.toLowerCase();
  req.body.city = req.body.city.toLowerCase();
  req.body.state = req.body.state.toLowerCase();

  const review = await Reviews.create(req.body);
  const drink = await Drinks.findById(req.params.id);

  drink.reviews.push(review);

  try {
    await drink.save();
  } catch (error) {
    console.log(error);
  }

  res.redirect(`/drinks/reviews/${drink._id}`);
};

module.exports = {
  renderForm,
  create: createReview,
};
