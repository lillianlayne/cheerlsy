const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  tatse: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }, 
  tatse: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  presentation: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  localVibe: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  price: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  restaurant: {
    type: String,
    required: true
  }, 
  city: {
    type: String,
    required: true,
  }, 
  state: {
    type: String,
    required: true,
  }
});


const drinkSchema = new Schema({
    category: {
      type: String,
      enum: ['beer', 'wine', 'cocktails', 'mocktails']
    },
    label: String,
    reviews: [reviewSchema]
  });

module.exports = mongoose.model("Drinks", drinkSchema);
