import PropTypes from "prop-types";
import Pill from "./Pill";
import "../styles/MovieDetails.css";

const MovieDetails = (props) => {
  return (
    <div className="movie-details-container">
      <div className="movie-details-section">
        <img src={props.posterUrl} alt={props.title} />
      </div>
      <div className="movie-details-section">
        <div className="movie-details-header">
          <p className="movie-details-title">{props.title}</p>
          <p className="movie-details-rating">{props.rating}</p>
        </div>
        <div className="movie-details-pills">
          <Pill backgroundColor="white">{props.rated}</Pill>
          <Pill backgroundColor="white">{props.runtime} min</Pill>
          <Pill backgroundColor="white">{props.genre}</Pill>
        </div>
        <div className="movie-details-subsection">
          <p>Plot</p>
          <p>{props.plot}</p>
        </div>
        <div className="movie-details-subsection">
          <p>Actors</p>
          <p>{props.actors}</p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rated: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetails;