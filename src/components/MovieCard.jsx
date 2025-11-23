import React from "react";

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div>
        <img src={`${baseUrl}${movie.poster_path}`} alt="" />
        <p>{movie.original_title}</p>
        <p>평점 : {movie.vote_average}</p>
      </div>
    </>
  );
};

export default MovieCard;
