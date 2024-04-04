const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
  
  },
    userName: String,
    userIcon: String,
    comment: String,
    taste: {
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
      enum: [
        'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
        'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md',
        'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj',
        'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc',
        'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy'
      ],
      required: true,
    }
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Review', reviewSchema)