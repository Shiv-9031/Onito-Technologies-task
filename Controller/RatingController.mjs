import pool from "../config/databaseConn.mjs";
import ErrorHandler from "../Error/ErrorHandler.mjs";

//get all detail of rating

export const getAllRating = async (req, res, next) => {
  let getDetail = pool.query("select * from ratings", function (err, result) {
    if (err) throw err;

    res.send({
      success: true,
      result,
    });
  });
};

// top rated movies where average rating >6.0
export const topRatedMovies = async (req, res, next) => {
    let getDetail = pool.query(" select movies.tconst,primaryTitle ,genres,averageRating from movies,ratings where averageRating>6.0", function (err, result) {
      if (err) throw err;
  
      res.send({
        success: true,
        result,
      });
    });
  };
