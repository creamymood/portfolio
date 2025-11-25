import React, { useEffect, useState } from "react";
import MovieDetails from "../assets/movieDetailData.json";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";

const MovieDetail = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState(movie);
  const params = useParams();

  const baseUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    api
      .get(`/movie/${params.id}`)
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <img src={`${baseUrl}${movieDetail?.poster_path}`} alt="" />
      <p>{movieDetail?.title}</p>
      <p>{movieDetail?.vote_average}</p>
      {movieDetail?.genres.map((g) => {
        return <p>{g.name}</p>;
      })}
      <p>{movieDetail?.overview}</p>
    </div>
  );
};

export default MovieDetail;
