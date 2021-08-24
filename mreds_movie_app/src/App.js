import {useState, useEffect} from 'react'
import './css/App.css';
import {getMoviesById} from './utils';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import Spinner from "./components/spinner";
import MovieList from './components/MovieList';
import { getMoviesBySearchTerm } from "./utils";
import Modal from './components/Modal';


function App() {
  const [searchTerm, setSearchTerm] = useState("Treasure Island");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Since fetch api is something that happens outside of the function where it's invoked, it's considered
  // a side effect, so we need to use inside a useEffect hook

  useEffect(() => {

    setIsLoading(true);

    getMoviesBySearchTerm(searchTerm)
      .then((movies) => {
        console.log(movies);

        setMovies(movies);
        setError(null);
      })
      .catch((err) => {

        setError(err);
        setMovies([]);
        console.error("Error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // empty array, means never execute the effect again, 
  //do it only once and that's it


  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (<div>Whoops! { error }</div>);
  }

  return (
    <div className="App">
      <h1>MrEd's Movie App</h1>
      <MovieList movies={movies} />
      <div className="h-100"></div>

    </div>
  );
}

export default App;