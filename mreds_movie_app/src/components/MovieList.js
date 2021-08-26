import React from "react";
import PropTypes from "prop-types";
import '../css/MovieList.css'
import MovieCard from "./MovieCard";


const MovieList = ({ movies = [], onMovieCardClicked }) => {
  return (
    <div style={{display: "flex", flexWrap: 'wrap'}}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
          onClicked={() => onMovieCardClicked(movie.imdbID)}
        />
      ))}
    </div>
  );
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};



export default MovieList;