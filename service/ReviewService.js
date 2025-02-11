const reviewModel = require("../models/Review");
const mongoose = require("mongoose");

const getAllReviews = async () => {
  return reviewModel.find().populate('movie');
};

const createReview = async (review) => {
  const newReview = new reviewModel({
    movie: new mongoose.Types.ObjectId(review.movie),
    rating: review.rating,
    review: review.review,
  });

  await newReview.save();
  return newReview.populate("movie");
};

const deleteReview = async (id) => {
  let isExist = reviewModel.findById(id);
  if (!isExist) {
    throw new Error("Movie Id " + id + " doens't exist");
  }
  let deletedReview = reviewModel.findByIdAndDelete(id);
  return deletedReview;
};

const getReviewById = async (id) => {
  let review = reviewModel.findById(id).populate("movie");
  return review;
};

const getReviewByMovieId = async (movieId) => {
  let review = reviewModel.find({ movie: movieId }).populate("movie");
  console.log(review);
  return review;
};

const updateReview = async (id, review) => {
  let isExist = reviewModel.findById(id);
  if (!isExist) {
    throw new Error("Review Id " + id + " not found");
  }
  let updatedReview = reviewModel.findByIdAndUpdate(id, review, { new: true });
  return updatedReview;
};

module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  getReviewById,
  updateReview,
  getReviewByMovieId,
};
