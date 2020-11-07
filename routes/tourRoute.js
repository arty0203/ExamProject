var express = require("express");
var router = express.Router();

var Controller = require("../controllers/tourController.js");

router.route("/").get(Controller.getAllTours);

router.route("/add").post(Controller.CreateNewTour);

router.route("/:id").get(Controller.getOneTour).put(Controller.UpdateTour).delete(Controller.deleteTour);

module.exports = router;
