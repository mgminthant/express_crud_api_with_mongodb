const express = require("express");
const router = express.Router();
const reviewController = require("../ Controller/ReviewController");

router.get('/',reviewController.getAllReviews);
router.post('/',reviewController.createReview);
router.delete('/:id',reviewController.deleteReview);
router.get('/:id',reviewController.getReviewById);
router.put('/:id',reviewController.updateReview);
router.get('/movies/:id',reviewController.getReviewByMovieId);

module.exports = router;
