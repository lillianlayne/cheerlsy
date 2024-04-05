const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  category: {
    type: String,
    enum: ["beer", "wine", "cocktails", "mocktails"],
  },
  content: String,
  label: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Drinks", drinkSchema);
