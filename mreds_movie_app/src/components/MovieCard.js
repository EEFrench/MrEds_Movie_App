import React from "react";
import '../css/MovieCard.css'

function MovieCard({ title, type, posterUrl }) {
  return (
      <article className="MovieCard">
          <img src={posterUrl} alt={`${title} Poster`} width="150" />

          <footer className="MovieCard__footer">
              <h3 className="MovieCard__title">{ title }</h3>
              <div className="MovieCard__tag">{ type }</div>
          </footer>
      </article>
  )
}

export default MovieCard;


//ORIGINAL CARD
// const MovieCard = (props) => (
//   <div className="movie-card">
//     <h1 className="movie-card__title">{props.title}</h1>

//     <img
//       src={props.posterUrl}
//       alt={`${props.title} poster`}
//       className="movie-card__poster"
//     />
//     <span className="movie-details ratings">{props.ratings}</span>
//     <p className="movie-details rated">{props.rated}</p>
//     <p className="movie-details runtime">{props.runtime}</p>
//     <p className="movie-details genre">{props.genre}</p>
//     <h2 className="movie-details plot">{props.plot}</h2>
//     <span className="movie-details actors">{props.actors}</span>
//   </div>
// );