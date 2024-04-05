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
      default: 3,
    }, 
    presentation: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    localVibe: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    price: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    restaurant: {
      type: String,
    }, 
    city: {
      type: String,
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
    }
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Review', reviewSchema)