import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movies from "../Movies.json";

const Home = () => {
  return (
    <>
      <h1>Movies list</h1>
      <ul>
        {Movies.map((movie) => (
          <li key={movie.title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
