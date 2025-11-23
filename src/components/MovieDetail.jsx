import React, { useState } from "react";
import MovieDetails from "../assets/movieDetailData.json";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(MovieDetails);
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <img src={`${baseUrl}${movieDetail.poster_path}`} alt="" />
      <p>{movieDetail.title}</p>
      <p>{movieDetail.vote_average}</p>
      {movieDetail.genres.map((g) => {
        return <p>{g.name}</p>;
      })}
      <p>{movieDetail.overview}</p>
    </>
  );
};

export default MovieDetail;
