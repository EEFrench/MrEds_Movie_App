import Pill from "./Pill";
import "../styles/MovieCard.css";

const MovieCard = ({ posterUrl, title, type, onClicked }) => {
  return (
    <div className="movie-card" onClick={onClicked}>
      <img src={posterUrl} alt={title} />
      <div className="movie-card-info">
        <p>{title}</p>
        <div>
          <Pill
            backgroundColor="rgba(255, 0, 0, 0.4)"
            borderColor="rgba(255, 0, 0, 0.7)"
          >
            {type}
          </Pill>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
© 2021 GitHub, Inc.