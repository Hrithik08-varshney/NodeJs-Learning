const fs = require("fs");
const AppError = require("../utils/appError");
const Tour = require("./../models/tourModel");
const catchAsync = require('./../utils/catchAsync');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-price";
  req.query.fields = "name,price";
  next();
};

exports.getAllTours = catchAsync(async (req, res) => {
    console.log(req.query, "here is field");

    //filtering
    const queryObject = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObject[el]);

    //advanced filtering

    let queryStr = JSON.stringify(queryObject);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    //sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join("");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //field limiting

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      console.log(fields, "by join");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //pagination

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) throw new Error("This page does not exist");
    }

    const tours = await query;

    res.status(200).json({
      status: "success",
      result: tours.length,
      data: {
        tours: tours,
      },
    });
});

exports.getTourById = catchAsync(async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    // const tour = await Tour.findOne({"name":"Hritwik Varshney"});
    if(!tour){
         return next(new AppError('No tour found with that Id',404));
    }
    console.log(tour);
    res.status(200).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
});

exports.postTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
});

exports.updateTour = catchAsync(async (req, res) => {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if(!tour){
        return next(new AppError('No tour found with that Id',404));
   }
      res.status(200).json({
        status: "success",
        data: {
          tour,
        },
      });
});

exports.deleteTour = catchAsync(async (req, res) => {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if(!tour){
        return next(new AppError('No tour found with that Id',404));
   }
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
});

//   exports.checkBody = (req,res,next) =>{
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status:"fail",
//             message:"Missing name or price"
//         })
//     }
//     next();
//   }
