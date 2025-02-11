const reviewService = require("../service/ReviewService");

const getAllReviews = async (req, res) => {
  try {
    let allReviews = await reviewService.getAllReviews();
    res.json(allReviews);
  } catch (err) {
    res.status(500).json({
      errMessage: err.message,
    });
  }
};

const createReview = async (req, res) => {
  let createdReview = await reviewService.createReview(req.body);
  res.json(createdReview);
};

const deleteReview = async (req, res) => {
  try {
    let deletedReview = await reviewService.deleteReview(req.params.id);
    res.json(deletedReview);
  } catch (err) {
    res.status(404).json({
      errMessage: err,
    });
  }
};

const getReviewById = async (req, res) => {
  try {
    let review = await reviewService.getReviewById(req.params.id);
    res.json(review);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const updateReview = async (req, res) => {
  try {
    let updatedReview = await reviewService.updateReview(
      req.params.id,
      req.body
    );
    res.json(updateReview);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getReviewByMovieId = async (req, res) => {
  try {
    let review = await reviewService.getReviewByMovieId(req.params.id);
    console.log(review);
    res.json(review);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  getReviewById,
  updateReview,
  getReviewByMovieId,
};
