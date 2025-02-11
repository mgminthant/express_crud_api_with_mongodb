const movieModel = require("../models/Movie");

async function getAllMovies() {
  return movieModel.find();
}

async function getMovieById(id) {
  let isExist = await movieModel.findById(id);
  if (!isExist) {
    throw new Error("Movie" + id + " not found");
  }
  return movieModel.findById(id);
}

async function createMovie(movie) {
  return movieModel.create(movie);
}

async function updateMovie(id, movie) {
  let isExist = await movieModel.findById(id);
  if (!isExist) {
    throw new Error("Movie" + id + " not found");
  }
  let updatedMovie = movieModel.findByIdAndUpdate(id, movie, {
    new: true,
  });
  return updatedMovie;
}

async function deleteMovie(id) {
  let isExist = await movieModel.findById(id);
  if (!isExist) {
    throw new Error("Movie" + id + " not found");
  }
  let delMovie = await movieModel.findByIdAndDelete(id);
  return delMovie;
}

const searchMovieByTitle = async (title) => {
  let findMovies = await movieModel.find({
    title: {
      $regex: title,
    },
  });
  return findMovies;
};

const searchMovieByYear=async(year)=>{
    let foundMovies = await movieModel.find({
        year:year
    })
    return foundMovies;
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
