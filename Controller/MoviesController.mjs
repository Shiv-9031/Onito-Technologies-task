import pool from "../config/databaseConn.mjs";
import ErrorHandler from "../Error/ErrorHandler.mjs";

//get all movies detail

export const getAllMovies = async (req, res, next) => {
  let getDetail = pool.query("select * from movies", function (err, result) {
    if (err) throw err;
  
    res.send({
        success:true,
        result
    })
  });


  //create new movies details
  
};
export const createMoviesList = async (req, res, next) => {
  const { tconst,
    titleType,
    primaryTitle,
    runtimeMinutes,
    genres } = req.body;

  const command = `insert into movies ( tconst,
        titleType,
        primaryTitle,
        runtimeMinutes,
        genres
         ) 
         values( "${tconst}","${titleType}","${primaryTitle}","${runtimeMinutes}","${genres}");`;

  let createPost = await pool.execute(command, function (err, result) {
    if (err) {
      return next(new ErrorHandler("this is error", 400));
    }
    console.log(result);
  });
  res.status(200).json({
    success:true,
  });
};
