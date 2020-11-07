var TourModel = require("../models/tourModel");
var controller = {};

controller.getAllTours = async (req, res) => {
  try {
    var tours = await TourModel.find({});
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: { tours },
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error,
    });
  }
};

controller.CreateNewTour = async (req, res) => {
  try {
    var id = req.body.id;
    var name = req.body.name;
    var duration = req.body.duration;
    var maxGroupSize = req.body.maxGroupSize;
    var difficulty = req.body.difficulty;
    var ratingsAverage = req.body.ratingsAverage;
    var price = req.body.price;
    var summary = req.body.summary;
    var startDates = req.body.startDates;

    var newcar = new TourModel({ id, name, duration, maxGroupSize, difficulty, ratingsAverage, price, summary, startDates });
    var data = await TourModel.create(newcar);
    res.status(200).json({
      status: "success",
      results: data.length,
      data: { data },
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error,
    });
  }
};

controller.getOneTour = async (req, res) => {
  try {
    var id = req.params.id;
    var data = await TourModel.findOne({ id });
    res.status(200).json({
      status: "success",
      results: data.length,
      data: { data },
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error,
    });
  }
};

controller.UpdateTour = async (req, res) => {
  try {
    var id = req.params.id;
    var name = req.body.name;
    var duration = req.body.duration;
    var maxGroupSize = req.body.maxGroupSize;
    var difficulty = req.body.difficulty;
    var ratingsAverage = req.body.ratingsAverage;
    var price = req.body.price;
    var summary = req.body.summary;
    var startDates = req.body.startDates;

    var data = await TourModel.findOneAndUpdate(
      { id },
      { name, duration, maxGroupSize, difficulty, ratingsAverage, price, summary, startDates }
    );
    res.status(200).json({
      status: "success",
      results: data.length,
      data: { data },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error,
    });
  }
};

controller.deleteTour = async (req, res) => {
  try {
    var id = req.params.id;
    var data = await TourModel.findOneAndDelete({ id });
    res.status(200).json({
      status: "success",
      results: data.length,
      data: { data },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error,
    });
  }
};

module.exports = controller;
