import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../assets/movieListData.json";
import MovieDetail from "../components/MovieDetail";

const Home = () => {
  const [movie, setMovie] = useState(movieListData.results);
  return (
    <div>
      <p>메인으로 보여질 페이지 입니다</p>
      {movie.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Home;
