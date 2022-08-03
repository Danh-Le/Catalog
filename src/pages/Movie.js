import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies.json";
import "../App.css";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(Movies[params.id - 1]);

  return (
    <div className="movieCard">
      <img src={movie.image} alt={movie.name} />
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>
        Actors:
        {movie.stars.map((star) => {
          return (
            <ul>
              <li>{star}</li>
            </ul>
          );
        })}
      </p>
      <p>Synopsis: {movie.description}</p>
    </div>
  );
};
// };
export default Movie;
