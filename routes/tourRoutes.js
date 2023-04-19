const express = require("express");
const {
  getAllTours,
  getTourById,
  postTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require("./../controllers/tourController");
const fs = require("fs");
const authController = require("./../controllers/authController");

const tourRouter = express.Router();
tourRouter.param("id", (req, res, next, val) => {
  next();
});

tourRouter.route("top-5-cheap").get(aliasTopTours, getAllTours);
tourRouter.route("/").get(authController.protect, getAllTours).post(postTour);
tourRouter
  .route("/:id")
  .get(getTourById)
  .patch(updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin",'lead-guide'),
    deleteTour
  );

module.exports = tourRouter;
