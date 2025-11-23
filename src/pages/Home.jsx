import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../assets/movieListData.json";
import MovieDetail from "../components/MovieDetail";
import styled from "styled-components";

const Home = () => {
  const [movie, setMovie] = useState(movieListData.results);
  return (
    <Card>
      {movie.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
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
