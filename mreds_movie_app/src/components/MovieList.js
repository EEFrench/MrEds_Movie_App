import MovieCard from "./MovieCard";

const MovieList = ({ movies = [], onMovieCardClicked }) => {
  return (
    <div style={{ display: "flex", flexWrap: 'wrap'}}>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          posterUrl={movie.Poster} 
          title={movie.Title} 
          type={movie.Type} 
          onClicked={() => onMovieCardClicked(movie.imdbID)}
        />
      ))}
    </div>
  )
}

export default MovieList;