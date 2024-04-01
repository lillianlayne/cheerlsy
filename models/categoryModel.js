const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: {
        type: String, 
        enum: ['beer','wine','cocktails','mocktails']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);