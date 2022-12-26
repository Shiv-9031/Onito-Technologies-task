import express from 'express';
import {getAllMovies,createMoviesList} from '../Controller/MoviesController.mjs'
import {getAllRating,topRatedMovies} from '../Controller/RatingController.mjs'
const Routes=express.Router();

Routes.route('/longest-duration-movies').get(getAllMovies);
Routes.route('/new-movie').post(createMoviesList);

// Routes.route('/get').get(getAllRating);
Routes.route('/top-rated-movies').get(topRatedMovies);

export default Routes;