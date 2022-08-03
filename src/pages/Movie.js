import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies.json";
// import { useNavigate } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(Movies[params.id - 1]);
  // const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate("/");

  return (
    <>
      <img src={movie.image} alt={movie.name} />
      <h1>{movie.title}</h1>
      <p>{movie.director}</p>
      <p>
        {movie.stars.map((star) => {
          return (
            <ul>
              <li>{star}</li>
            </ul>
          );
        })}
      </p>
      <p>{movie.description}</p>
      {/* <button onClick={handleButtonClick}>Back to home</button> */}
    </>
  );
};
// };
export default Movie;
