const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  id: Number,
  name:String,
  duration: Number,
  maxGroupSize: Number,
  difficulty: String,
  ratingAverage:Number,
  price:Number,
  summary:String,
  starDates:Date

});

module.exports = mongoose.model("tour", tourSchema);
