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
  const [showModal, setShowModal] = useState(false);
  const [clickedMovieId, setClickedMovieId] = useState(null);

  const handleMovieCardClick = (movieId) => {
    setClickedMovieId(movieId)
    setShowModal(true)
  }

  // Since fetch api is something that happens outside of the function 
  //where it's invoked, it's considered a side effect, 
  //so we need to use inside a useEffect hook

  useEffect(async () => {
    setIsLoading(true);

    try {
      const movieData = await getMoviesBySearchTerm(searchTerm);
      setMovies(movieData)
      setError(null)
    } catch(error) {
      setMovies([]);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  },
  []
);

// return (
//   <>
//   {isLoading
//     ? (<div>Loading...</div>)
//     : (
//       <>
//         <MovieList movies={movies} onMovieCardClicked={handleMovieCardClick} />
//       </>
//     )}
//     <Modal show={showModal} onClose={() => setShowModal(false)}>
//       <MovieDetails 
//         posterUrl="https://m.media-amazon.com/images/I/81az0oR6izL._AC_.jpg"
//         title="Batman v Superman: Dawn of Justice"
//         rated="PG-13"
//         runtime={183}
//         genre="Action, Adventure, Sci-Fi" 
//         plot="Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs." 
//         actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg" 
//         rating={6.3}
//       />
//     </Modal>
//   </>
// );
// }

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