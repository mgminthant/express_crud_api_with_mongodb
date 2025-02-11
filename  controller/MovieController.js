const movieService = require("../service/MovieService");

async function getAllMovies(req, res, next) {
  try {
    let movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (err) {
    res.status(500).json({
      errMessage: err.toString(),
    });
  }
}

async function getMovieById(req, res, next) {
  try {
    let movie = await movieService.getMovieById(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(404).json({
      errMessage: err.toString(),
    });
  }
}

async function createMovie(req, res, next) {
  try {
    let newMovie = movieService.createMovie(req.body);
    res.json(newMovie);
  } catch (err) {
    res.status(400).json({
      errMessage: "Something went wrong",
    });
  }
}

async function updateMovie(req, res, next) {
  try {
    let updatedMovie =await movieService.updateMovie(req.params.id, req.body);
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({
      errMessage: "Movie not found",
    });
  }
}

async function deleteMovie(req, res, next) {
  try {
    let delMovie = await movieService.deleteMovie(req.params.id);
    res.json(delMovie);
  } catch (err) {
    res.status(400).json({
      errMessage: "Something went wrong",
    });
  }
}

const searchMovieByTitle = async (req, res, next) => {
  try {
    let foundMovies = await movieService.searchMovieByTitle(req.params['title']);
    res.json(foundMovies);
  } catch (err) {
    res.status(400).json({
      errMessage: "Something went wrong",
    });
  }
};

const searchMovieByYear=async(req,res,next)=>{
    try{
        let foundMovies = await movieService.searchMovieByYear(req.params['year']);
        res.json(foundMovies);
    }catch(er){
        res.status(404).json({
            errMessage:"Not Found"
        })
    }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  updateMovie,
  searchMovieByTitle,
  searchMovieByYear
};
