var express = require('express');
var router = express.Router();

const movieController = require('../ Controller/MovieController');

router.get('/', movieController.getAllMovies);
router.get('/:id',movieController.getMovieById);
router.post('/',movieController.createMovie);
router.delete('/:id',movieController.deleteMovie);
router.put('/:id',movieController.updateMovie);
router.get('/title/:title',movieController.searchMovieByTitle);
router.get('/year/:year',movieController.searchMovieByYear)

module.exports = router;