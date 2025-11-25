import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
// import movieListData from "../assets/movieListData.json";
import MovieDetail from "../components/MovieDetail";
import styled from "styled-components";
import { api } from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const clickHandler = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  useEffect(() => {
    api
      .get("/movie/popular?language=en-US&page=1")
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Card>
      {movie
        .filter((movie) => movie.adult === false)
        .map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => clickHandler(movie)}
            />
          );
        })}
    </Card>
  );
};

export default Home;

//style components
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
