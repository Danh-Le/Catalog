import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movies from "../Movies.json";
import "../App.css";

const Home = () => {
  return (
    <div className="homePage">
      <h1>Movies list</h1>
      <ul>
        {Movies.map((movie) => (
          <li key={movie.title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
