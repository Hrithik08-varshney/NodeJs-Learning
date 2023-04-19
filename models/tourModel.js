const mongoose = require("mongoose");
const slugify = require("slugify");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    createdAt: {
      type: String,
      select: false, //to hide it from client- it will not show in api
    },
    slug:{
        type:String
    },
    secretTour:{
        type:Boolean,
        default:false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//virtual functions
tourSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7; //virtual function
});

//document middleware

//middleware implemented before saving data
tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.post("save", function(doc,next){
    next();
})

//query middleware

tourSchema.pre('/^find/',function(next){
    this.find({secretTour :{$ne:true}})
    next();
})

tourSchema.post('/^find/',function(docs,next){
    next();
})
 

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
