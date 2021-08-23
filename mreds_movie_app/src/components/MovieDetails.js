import React from "react";
import PropTypes from 'prop-types';
//import Pill from './Pill'

const MovieDetails = (props) => (
  <div className="movie-details">
    <h1 className="movie-details__title">{props.title}</h1>

    <img
      src={props.posterUrl}
      alt={`${props.title} poster`}
      className="movie-details__poster"
    />

    <span className="movie-details ratings">{props.ratings}</span>
    <p className="movie-details rated">{props.rated}</p>
    <p className="movie-details runtime">{props.runtime} min</p>
    <p className="movie-details genre">{props.genre}</p>
    <h2 className="movie-details plot">{props.plot}</h2>
    <span className="movie-details actors">{props.actors}</span>
  </div>
);

export default MovieDetails;