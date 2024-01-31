import React from "react";
import "./movieCard.css";
import { NavLink } from "react-router-dom";
const MovieCard = ({ data }) => {
  const id = data.show.id;
  console.log(data);

  const handleClick = () => {
    localStorage.setItem("movieId", id);
  };

  return (
    <div className="movie-card-container">
      <img src={data?.show?.image?.medium} alt="" />
      <div className="text-container">
        <div className="text-head">
          <div>{data.show.name}</div>{" "}
        </div>
        <div>⭐</div> 
        
        <div>{data.show.rating.average || Math.round(data.score * 10, 1)}</div>
        <div className="lang">{data.show.language}</div>

        <h5 className="genre">{data.show.genres[0]}</h5>
        <NavLink className='link' to={`/movie/${id}`}>
          <button className="view-btn" onClick={handleClick}>
            View Details 🎥
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MovieCard;
