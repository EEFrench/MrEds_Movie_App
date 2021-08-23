import {useState, useEffect} from 'react'
import './css/App.css';
import {getMoviesById} from './utils';
import MovieCard from './components/MovieCard'
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
//import Modal from './Modal';

function App() {
  const [movie, setMovie] = useState({});

  // Since fetch api is something that happens outside of 
  //the function where it's invoked, it's considered
  // a side effect, so we need to use inside a useEffect hook
  useEffect(() => {
    getMoviesById("tt0100813")
      .then((movie) => {
        console.log(movie);

        const rating = movie.Ratings?.[0]?.Value;
        const decimalRating = rating.split('/')?.[0] || rating;

        setMovie({ ...movie, Rating: decimalRating }); // update state for movie
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []); // empty array, means never execute the effect again, do it only once and that's it

  return (
    <div className="App">
      <h1>Movie App</h1>


      {/* Using the MovieCard component */}
      <MovieCard
        title={movie.Title}
        type={movie.Type}
        posterUrl={movie.Poster}
      />

      <div className="h-100"></div>

      {/* Using the MovieDetails component */}
      <MovieDetails
        posterUrl={movie.Poster}
        title={movie.Title}
        rated={movie.Rated}
        runtime={movie.Runtime}
        genre={movie.Genre}
        plot={movie.Plot}
        actors={movie.Actors}
        rating={movie.Rating}
      />
    </div>
  );
}


export default App;