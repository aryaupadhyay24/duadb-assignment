import React from "react";
import "./home.css";
import { useGlobalContext } from "../../context";
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import ReactLoading from 'react-loading';
const Home = () => {
  const { movies, loading } = useGlobalContext();
  console.log(loading);

  return (
    <div className="home-container">
      {loading
        ? <ReactLoading type="spinningBubbles" color="green" height={'40%'} width={'20%'} />
        : movies.map((item) => {
            return <MovieCard data={item} key={item.show.id} />;
          })}
    </div>
  );
};

export default Home;
